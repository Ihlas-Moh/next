import { NextRequest } from "next/server";
import { GeneralAsyncRequestParams } from "@/lib/@types";
import { deleteByID, getById, putById } from "@/lib/generic-controllers";

export async function GET(
  _: NextRequest,
  { params }: { params: GeneralAsyncRequestParams },
) {
  const id = (await params).id;
  return await getById(id, "/store");
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: GeneralAsyncRequestParams },
) {
  const id = (await params).id;
  return await deleteByID(id, "/store");
}

export async function PUT(
  request: NextRequest,
  { params }: { params: GeneralAsyncRequestParams },
) {
  const id = (await params).id;
  return await putById(request, id, "/store");
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: GeneralAsyncRequestParams },
) {
  const id = (await params).id;
  return await putById(request, id, "/store");
}
