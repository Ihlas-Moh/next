import { APIResponse } from "@/lib/response/response";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";

export function createSuccessResponse<T>(
  data: T,
  status = StatusCodes.OK,
  message = "Success",
) {
  return NextResponse.json(APIResponse.success<T>(message, data, status), {
    status,
  });
}
