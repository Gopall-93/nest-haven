import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListStep3 = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/step3",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/Step3")
  ),
});
