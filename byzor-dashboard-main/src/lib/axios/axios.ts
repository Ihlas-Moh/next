import axios, { type AxiosInstance } from "axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getKindeToken() {
  const { getAccessTokenRaw } = getKindeServerSession();
  return await getAccessTokenRaw();
}

export const getAxios = (token: string) => {
  return () => {
    const axiosInstance = axios.create({
      baseURL: process.env.API_BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return axiosInstance;
  };
};
export async function getAxiosWithToken(): Promise<AxiosInstance> {
  const token = await getKindeToken();
  return getAxios(token)();
}
