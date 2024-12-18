import { SingleRequest } from "@/lib/store/@types/index";
import * as z from "zod";

const { object, string, number } = z;

export const type = z.enum(["product", "store"]);

export const reviewSchema = object({
  stars: number().min(1).max(5),
  review: string(),
  type: type.default("product"),
  store: string().optional(),
  owner: string(),
  product: string().optional(),
});

/*
 * can be extended if needed
 */
export const insertReviewSchema = reviewSchema?.strict();
export const updateReviewSchema = reviewSchema?.partial();

export type ReviewType = z.infer<typeof reviewSchema>;
// export type ReviewDocType = Omit<ReviewType, "store" | "owner" | "product"> & {
//   store?: SchemaDefinitionProperty<string>;
//   owner: SchemaDefinitionProperty<string>;
//   product?: SchemaDefinitionProperty<string>;
// } & DocType;

// export type ReviewDocType = Omit<ReviewType, "store" | "owner" | "product"> & {
//   store?: string;   // Store ID as string (optional)
//   owner: string;    // Owner ID as string (required)
//   product?: string; // Product ID as string (optional)
// } & DocType; // this may be correct

export type ReviewDocType = ReviewType & { _id: string };

// ================ REVIEW ===================
export type ReviewsResponse = Array<ReviewDocType>;

export type ReviewResponse = {
  data: ReviewType;
};

export type ReviewRequest = Partial<ReviewType> & { id?: string };
export type ReviewSingleRequest = ReviewRequest & SingleRequest;
