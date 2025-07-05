import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { handleEmail } from "../API/handleEmail";

export const emailVerificationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/email-verification",
  component: lazyRouteComponent(() => import("../Pages/EmailVerificationPage")),
  beforeLoad: ({ search }) => {
    const { email } = search;
    handleEmail(email);
  },
});
