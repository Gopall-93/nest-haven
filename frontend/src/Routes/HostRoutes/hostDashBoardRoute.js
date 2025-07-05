import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "./hostParentRoute";

import { handleLoad } from "../../utils/handleLoad";

export const hostDashBoard = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/dashboard",
  component: lazyRouteComponent(()=>import("../../Pages/HostPage/HostDashBoard")),
  beforeLoad:handleLoad
});
