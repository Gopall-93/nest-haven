import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

export const newListPrivacyRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/privacy",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/PrivacyPage")
  ),
});
