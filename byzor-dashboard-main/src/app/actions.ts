"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAxiosWithToken } from "@/lib/axios/axios";
import { KindeUserType, UserType } from "@/lib/actions/@types/user";
import { AxiosError } from "axios";

export async function getKindUser() {
  const { getUser, getAccessTokenRaw } = getKindeServerSession();
  const axios = await getAxiosWithToken();
  const user = await getUser();
  const token = await getAccessTokenRaw();

  try {
    const { data } = await axios.post<
      KindeUserType,
      { data: { data: UserType } }
    >("/kinde", {
      name: user.given_name + " " + user.family_name,
      kindeId: user.id,
      email: user.email,
      picture: user.picture,
    });
    console.log("Data", data);
    const _user = data.data;
    if (_user) {
      return { ..._user, token };
    } else {
      return null;
    }
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.log("Fetch user", error);
    return null;
  }
}
