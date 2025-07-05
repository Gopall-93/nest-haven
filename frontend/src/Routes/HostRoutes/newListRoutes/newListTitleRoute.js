import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListTitleRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/title",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/TitlePage")
  ),
});
