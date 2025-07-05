
import { rootRoute } from "../rootRoute";
import { createRoute, lazyRouteComponent } from "@tanstack/react-router";

export const hostParentRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: lazyRouteComponent(()=>import("../../Pages/HostPage/HostParentPage")),
  path: "/host",
});
