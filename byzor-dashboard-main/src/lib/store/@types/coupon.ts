import * as z from "zod";
import { SingleRequest } from "@/lib/store/@types/index";

const { object, string, array, date, number } = z;

export const type = z.enum(["percentage", "absolute"]);

export const couponClaims = object({
  claimedBy: string(),
  date: date(),
  products: array(string()),
});

export const couponSchema = object({
  name: string(),
  description: string().optional(),
  products: array(string()),
  discount: number(),
  type: type.default("absolute"),
  store: string(),
  owner: string(),
  validFrom: date().optional(),
  validTo: date().optional(),
  claims: array(couponClaims).optional().default([]),
});

/*
 * can be extended if needed
 */
export const insertCouponSchema = couponSchema?.strict();
export const updateCouponSchema = couponSchema?.partial();

export type CouponType = z.infer<typeof couponSchema>;
export type CouponClaimsType = z.infer<typeof couponClaims>;
// export type CouponClaimsDocType = Omit<CouponClaimsType, "claimedBy" | "products"> & {
//   claimedBy: SchemaDefinitionProperty<string>;
//   products?: SchemaDefinitionProperty<string>;
// };
export type CouponDocType = CouponType & { _id: string };

// ================ COUPON ===================
export type CouponsResponse = Array<CouponDocType>;

export type CouponResponse = {
  data: CouponType;
};

export type CouponRequest = Partial<CouponType> & { id?: string };
export type CouponSingleRequest = CouponRequest & SingleRequest;
