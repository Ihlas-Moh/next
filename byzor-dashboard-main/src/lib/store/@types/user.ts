import * as z from "zod";
import { storeSchema } from "@/lib/store/@types/store";
import {
  addressSchema,
  locationSchema,
  phoneSchema,
  photoSchema,
  thumbSchema,
} from "@/lib/@types/shared-schema";
import { SingleRequest } from "@/lib/store/@types/index";

const { object, string, boolean } = z;

export const roles = z.enum(["admin", "user", "store-owner", "super-admin"]);
export const title = z.enum(["Mr", "Mrs", "Miss", "Dr", "Prof"]);
export const gender = z.enum(["Male", "Female", "Genderless"]);

export const bankSchema = object({
  accountHolderName: string({ message: "Account holder name is required" }),
  bankName: string({ message: "Bank name is required" }),
  accountNumber: string({ message: "Account number is required" }),
  ibanNumber: string().optional(),
  swiftNumber: string().optional(),
  city: string({ message: "City is required" }),
});

export const userVerification = object({
  userAddressInID: addressSchema.optional(),
  idCardNumber: string().optional(),
  verified: boolean().optional().default(false),
  verifiedBy: string().nullish(),
});

export const userSchema = object({
  name: string({ message: "Name is required" }),
  email: string().email().optional(),
  kindeId: string().nullish().default(null),
  password: string({ message: "Password is required" }),
  title: title.optional(),
  role: roles.optional(),
  gender: gender.optional(),
  telephone: z.array(phoneSchema).nullish(),
  address: addressSchema.nullish(),
  position: string().optional(),
  avatar: photoSchema.nullish(),
  picture: string().nullish(),
  isActive: boolean().nullish(),
  bank: bankSchema.nullish(),
  stores: z.array(storeSchema).nullish().default([]),
  userVerification: userVerification.nullish(),
});

export const updateUserSchema = userSchema
  .partial()
  .omit({ password: true })
  .strict();
export const insertUserSchema = userSchema.strict();

export const registerUserSchema = userSchema
  .and(
    object({
      confirmPassword: string().min(6),
    }),
  )
  .superRefine(({ password, confirmPassword }, ctx) => {
    password === confirmPassword ||
      ctx.addIssue({ code: "custom", message: "password does not match" });
  });

export const insertKindeUserSchema = userSchema.strict();

export type Thumb = z.infer<typeof thumbSchema>;
export type Photo = z.infer<typeof photoSchema>;
export type Location = z.infer<typeof locationSchema>;
export type Phone = z.infer<typeof phoneSchema>;
export type UserVerification = z.infer<typeof userVerification>;
export type Bank = z.infer<typeof bankSchema>;
export type UserType = z.infer<typeof userSchema>;
export type UserDocType = UserType & { _id: string };

export const loginSchema = object({
  email: string(),
  password: string(),
});

// ===================== RESPONSE AND REQUEST TYPES =====================
export type UsersResponse = Array<UserType>;

export type UserResponse = {
  data: UserType;
};

export type UserRequest = Partial<UserType>;
export type UserSingleRequest = UserRequest & SingleRequest;

// (Note: You need to ensure `SingleRequest` is properly imported in `user.ts`,
// similar to how it's done in `store.ts`. If not already available, define it or import it.)
