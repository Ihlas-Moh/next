"use server";
import { cookies } from "next/headers";
import axios from "axios";
import { sleep } from "@/lib/utils";
import { getKindUser } from "@/app/actions";
import { getAxiosWithToken } from "@/lib/axios/axios";


// iza getUsers a run pannakola error vandha azu thaan innamoru getUsers a senja
// and iza ye use pandra ?

// export async function getUsers() {
//   await sleep(3000);
//   const { data } = await axios.get("http://localhost:3000/api/user");
//   return data.data;
// }

export async function getUser() {
  const cookie = await cookies();
  try {
    const user = cookie.get("user")?.value;
    const userObj = user ? JSON.parse(user) : null;
    if (!userObj) {
      return await getKindUser();
    }

    return userObj;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getUsers() {
  try {
    const axios = await getAxiosWithToken();
    const response = await axios.get("/user");
    return response.data?.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
