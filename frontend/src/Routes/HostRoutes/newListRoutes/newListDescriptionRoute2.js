import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListDescriptionRoute2 = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/description2",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/DescriptionPage2")
  ),
});
