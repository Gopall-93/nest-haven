import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";

import { userLocation } from "../API/getUserLocation";
import { phoneCodes } from "../API/getPhoneCode";

export const SignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user/signup",
  component: lazyRouteComponent(() => import("../Pages/SignupPage")),
  loader: async () => {
    const location = await userLocation();
    const phoneCode = await phoneCodes();
    return { location, phoneCode };
  },
});
