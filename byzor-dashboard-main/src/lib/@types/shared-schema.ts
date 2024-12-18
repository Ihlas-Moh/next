import { array, number, object, string } from "zod";
import * as z from "zod";
export const addressTypes = z.enum(["Commercial", "Resident"]);
export const locationSchema = object({
  coordinates: array(number()),
  type: addressTypes,
});

export const phoneSchema = object({
  label: string(),
  number: string(),
});

export const addressSchema = object({
  street: string({ message: "Street is required" }),
  city: string({ message: "City is required" }),
  city2: string().optional(),
  number: string().optional(),
  landmark: string().optional(),
  location: locationSchema.optional(),
  type: addressTypes.optional(),
  district: string().optional(),
  province: string().optional(),
});

export const thumbSchema = object({
  bytes: number(),
  format: string(),
  width: number(),
  height: number(),
  secure_url: string(),
  url: string(),
});

export const photoSchema = object({
  secure_url: string(),
  url: string(),
  width: number(),
  height: number(),
  asset_id: string(),
  signature: string(),
  format: string(),
  public_id: string(),
  version_id: string(),
  thumbnails: array(thumbSchema),
});

export const getByIDSchemaParams = object({
  id: string().min(23),
});
