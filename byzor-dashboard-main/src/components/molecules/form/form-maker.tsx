import React from "react";
import { GenericMutationType } from "@/lib/store/@types";
import { ZodSchema } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type {
  AsyncDefaultValues,
  DefaultValues,
  FieldValues,
  // @ts-ignore
} from "react-hook-form/dist/types";
import { Form } from "@/components/atoms/form";
import LoadingButton from "@/components/atoms/loading-button/loading-button";
import { toast } from "sonner";

type Props<K> = {
  createHook: GenericMutationType;
  schema: ZodSchema;
  defaultValues: DefaultValues<K> | AsyncDefaultValues<K>;
  children: React.ReactNode;
  afterSubmitCallback?: (response: K) => void;
  id?: string;
};

function FormMaker<EntityType extends FieldValues = FieldValues>({
  defaultValues,
  schema,
  createHook,
  children,
  afterSubmitCallback,
  id,
}: Props<EntityType>) {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<EntityType>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const [create] = createHook();

  React.useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form, form.reset]);

  const handleSubmit = React.useCallback(
    async (data: Partial<EntityType>) => {
      setLoading(true);
      try {
        const response = await create(id ? { ...data, id } : { ...data });
        if (typeof afterSubmitCallback === "function") {
          afterSubmitCallback(response as EntityType);
        }
      } catch (e: unknown) {
        // @ts-ignore
        toast.error(e?.message ?? "Error");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    },
    [create, afterSubmitCallback, id],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {children}
        <div className={"py-4 px-4 flex justify-end animate"}>
          <LoadingButton loading={loading} type={"submit"}>
            Submit
          </LoadingButton>
        </div>
      </form>
      <div className="p-4">
        <h5>Errors</h5>
        <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      </div>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
    </Form>
  );
}

export default FormMaker;
