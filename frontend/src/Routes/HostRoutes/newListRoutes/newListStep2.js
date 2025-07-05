import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListStep2 = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/step2",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/Step2")
  ),
});
