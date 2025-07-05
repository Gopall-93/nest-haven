import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListPriceRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/price",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/PricePage")
  ),
});
