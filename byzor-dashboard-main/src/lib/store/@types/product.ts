import * as z from "zod";
import { SingleRequest } from "@/lib/store/@types/index";

const { object, string, number } = z;

export const type = z.enum(["service", "product"]);

export const productSchema = object({
  name: string(),
  description: string(),
  price: string(),
  sku: number().nullish().default(null),
  type: type.default("product"),
  store: string(),
  owner: string(),
  advertisement: string().optional(),
});

/*
 * can be extended if needed
 */
export const insertProductSchema = productSchema?.strict();
export const updateProductSchema = productSchema?.partial();

export type ProductType = z.infer<typeof productSchema>;
export type ProductDocType = ProductType & { _id: string };

// ================ PRODUCT ===================
export type ProductsResponse = Array<ProductType>;

export type ProductResponse = {
  data: ProductType;
};

export type ProductRequest = Partial<ProductType>;
export type ProductSingleRequest = ProductRequest & SingleRequest;
