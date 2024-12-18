import { getAxiosWithToken } from "@/lib/axios/axios";

export async function getStores() {
  try {
    const axios = await getAxiosWithToken();
    const response = await axios.get("/store");
    return response.data?.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getStore(id: string) {
  console.log(id);
  try {
    const axios = await getAxiosWithToken();
    const response = await axios.get(`/store/${id}`);
    return response.data?.data;
  } catch (e) {
    return {};
  }
}
