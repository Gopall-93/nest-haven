import { createRoute,lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";


export const newListDescriptionRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/description",
  component: lazyRouteComponent(()=>import("../../../Pages/HostPage/createListPages/DescriptionPage")),
});
