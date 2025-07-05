import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListDiscountRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/discount",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/DiscountPage")
  ),
});
