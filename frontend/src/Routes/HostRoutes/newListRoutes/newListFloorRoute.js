import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListFloorPlan = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/floor-plan",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/FloorPlan")
  ),
});
