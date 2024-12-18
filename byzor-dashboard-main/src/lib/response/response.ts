import { StatusCodes } from "http-status-codes";
import { z } from "zod";

export class APIResponse<K = null> {
  readonly success: boolean;
  readonly message: string;
  readonly data: K;
  readonly status: number;

  private constructor(success: boolean, message: string, data: K, statusCode: number) {
    this.success = success;
    this.message = message;
    this.data = data;
    this.status = statusCode;
  }

  static success<K>(message: string, data: K, statusCode: number = StatusCodes.OK) {
    return new APIResponse(true, message, data, statusCode);
  }

  /* istanbul ignore next */
  static failure<K>(message: string, data: K, statusCode: StatusCodes) {
    return new APIResponse(false, message, data, statusCode);
  }
}

export const ResponseSchema = <K extends z.ZodTypeAny>(dataSchema: K) =>
  z.object({
    success: z.boolean(),
    message: z.string(),
    data: dataSchema.optional(),
    status: z.number(),
  });
