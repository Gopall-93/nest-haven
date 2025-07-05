import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { hostParentRoute } from "../hostParentRoute";


export const newListAmenitiesRoute = createRoute({
  getParentRoute: () => hostParentRoute,
  path: "/newlist/amenities",
  // component: AmenitiesPage,
}).lazy(() =>
  import("../../../Pages/HostPage/createListPages/AmenitiesPage").then(
    (d) => d.Route
  )
);
