import { axiosInstance } from "./axiosInstance";

export const handleEmail = async (email) => {
  const data = await axiosInstance.post("/email-verification", { email });
  return data;
};
