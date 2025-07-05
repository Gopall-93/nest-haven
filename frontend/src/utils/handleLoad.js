import { getUser } from "../API/getUser.js";
import { login } from "../../app/auth.slice.js";
import { redirect } from "@tanstack/react-router";

export const handleLoad = async ({ context }) => {
  const { store, queryClient } = context;

  try {
    const data = await queryClient.ensureQueryData({
      queryKey: ["authUser"],
      queryFn: getUser,
    });
    if (data) store.dispatch(login(data));
    else return redirect({ to: "/user/login" });
  } catch (err) {
    console.log(err);
    return redirect({ to: "/user/login" });
  }
};
