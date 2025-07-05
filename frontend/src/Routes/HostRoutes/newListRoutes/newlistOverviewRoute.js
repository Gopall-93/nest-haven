import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

import { handleLoad } from "../../../utils/handleLoad";


export const newlistOverviewRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/overview",
  component: lazyRouteComponent(()=>import("../../../Pages/HostPage/createListPages/Overview")),
  beforeLoad: handleLoad,
});
