import { NextResponse } from "next/server";

export const createErrorResponse = (
  code = 500,
  error: unknown | Error,
  //returnErrorBody: boolean = false,
) => {
  const message =
    error instanceof Error
      ? error.message
      : "Cannot parse error message, something went wrong!";
  return NextResponse.json(
    {
      status: "error",
      message,
    },
    { status: code },
  );
};
