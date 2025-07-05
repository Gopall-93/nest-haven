import { axiosInstance } from "./axiosInstance";

export const getUser = async () => {
  
  try {
    const { data } = await axiosInstance.get("/auth/me", {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    console.log(err)
  }
};


