import { NextRequest, NextResponse } from "next/server";
import { getAxiosWithToken, getKindeToken } from "@/lib/axios/axios";
import { AxiosError } from "axios";
import { Resources } from "@/lib/@types";

export const create = async (req: NextRequest, path: Resources) => {
  try {
    const axios = await getAxiosWithToken();
    const data = await req.json();
    const resp = await axios.post(path, data);
    return NextResponse.json(resp.data);
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.status },
    );
  }
};

export const getAll = async (_: NextRequest, path: Resources) => {
  try {
    const axios = await getAxiosWithToken();
    const token = await getKindeToken();
    const resp = await axios.get(path, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(resp.data);
  } catch (err) {
    const error = err as AxiosError;
    console.log(error.response?.data);
    return NextResponse.json({
      data: error.response?.data,
      status: error.response?.status,
    });
  }
};

export const getById = async (id: string, path: Resources) => {
  try {
    const axios = await getAxiosWithToken();
    const resp = await axios.get(`${path}/${id}`);
    return NextResponse.json(resp.data);
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.status },
    );
  }
};

export const putById = async (
  req: NextRequest,
  id: string,
  path: Resources,
) => {
  try {
    const axios = await getAxiosWithToken();
    const data = await req.json();
    const resp = await axios.put(`${path}/${id}`, data);
    return NextResponse.json(resp.data);
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.status },
    );
  }
};

export const deleteByID = async (id: string, path: Resources) => {
  try {
    const axios = await getAxiosWithToken();
    const resp = await axios.delete(`${path}/${id}`);
    return NextResponse.json(resp.data);
  } catch (err: unknown) {
    const error = err as AxiosError;
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.status },
    );
  }
};
