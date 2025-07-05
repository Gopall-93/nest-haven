import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListImageRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/image",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/ImagePage")
  ),
});
