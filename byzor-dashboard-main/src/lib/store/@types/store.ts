import * as z from "zod";
import { addressSchema, photoSchema } from "@/lib/@types/shared-schema";
import { UserDocType } from "@/lib/store/@types/user";

const { object, string, boolean, date } = z;

export const type = z.enum(["service", "product"]);

export const businessVerificationSchema = object({
  businessName: string().optional(),
  businessType: string().optional(),
  businessRegistrationNumber: string().optional(),
  businessRegistrationDate: date().optional(),
  businessRegistrationProof: string().optional(),
  businessRegistrationProofType: string().optional(),
  verified: boolean().default(false),
  verifiedBy: string().optional(),
});

export const storeSchema = object({
  name: z.string(),
  description: z.string().optional(),
  banner: photoSchema?.optional(),
  logo: photoSchema?.optional(),
  address: addressSchema?.nullish(),
  owner: string(),
  businessVerification: businessVerificationSchema.nullish(),
});

/*
 * can be extended if needed
 */
export const insertStoreSchema = storeSchema?.strict();
export const updateStoreSchema = storeSchema?.partial();

export type StoreType = z.infer<typeof storeSchema>;
export type StoreDocType = StoreType & { _id: string };
export type StoreDocWithOwnerType = Omit<StoreDocType, "owner"> & {
  owner: UserDocType;
};
export type BusinesVerificationType = z.infer<
  typeof businessVerificationSchema
>;

// ================ STORE ===================
export type StoresResponse = Array<StoreDocType>;

export type StoreResponse = {
  data: StoreType;
};

export type StoreRequest = Partial<StoreType>;
export type StoreSingleRequest = StoreRequest & { id?: string };
