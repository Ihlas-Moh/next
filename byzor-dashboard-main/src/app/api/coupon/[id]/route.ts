import { NextRequest } from "next/server";
import { GeneralRequestParams } from "@/lib/@types";
import { deleteByID, getById, putById } from "@/lib/generic-controllers";

export async function GET(
  _: NextRequest,
  { params: { id } }: GeneralRequestParams,
) {
  return await getById(id, "/coupon");
}

export async function DELETE(
  _: NextRequest,
  { params: { id } }: GeneralRequestParams,
) {
  return await deleteByID(id, "/coupon");
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: GeneralRequestParams,
) {
  return await putById(request, id, "/coupon");
}

export async function PATCH(
  request: NextRequest,
  { params: { id } }: GeneralRequestParams,
) {
  return await putById(request, id, "/coupon");
}
