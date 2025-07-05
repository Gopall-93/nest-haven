import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";

import { handleLoad } from "../../../utils/handleLoad";

export const newListStructureRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/structure",
  component: lazyRouteComponent(() =>
    import("../../../Pages/HostPage/createListPages/NewListStructurePage")
  ),
  beforeLoad: handleLoad,
});
