import * as React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";

export type BreadcrumbDataType = {
  title: string;
  link?: string;
};

type Props = {
  data: BreadcrumbDataType;
  separator?: boolean;
};

const BreadcrumbItemComponent = ({
  data: { title, link },
  separator = false,
}: Props) => {
  return (
    <>
      <BreadcrumbItem className="hidden md:block">
        {link ? (
          <BreadcrumbLink href={link}>{title}</BreadcrumbLink>
        ) : (
          <BreadcrumbPage>{title}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
      {separator ? <BreadcrumbSeparator className="hidden md:block" /> : null}
    </>
  );
};

export default BreadcrumbItemComponent;
