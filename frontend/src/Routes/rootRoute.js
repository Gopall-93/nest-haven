import { createRootRoute, createRoute } from "@tanstack/react-router";
import App from "../App";
import { SignupRoute } from "./SignupRoute";
import { emailVerificationRoute } from "./emailVerificationRoute";
import { homeRoute } from "./homeRoute";
import { loginRoute } from "./loginRoute";
import { newListStructureRoute } from "./HostRoutes/newListRoutes/newListStructureRoute";

import { newlistOverviewRoute } from "./HostRoutes/newListRoutes/newlistOverviewRoute";
import { hostParentRoute } from "./HostRoutes/hostParentRoute";
import { newListPrivacyRoute } from "./HostRoutes/newListRoutes/newListPrivacyRoute";
import { newListFloorPlan } from "./HostRoutes/newListRoutes/newListFloorRoute";
import { newListAmenitiesRoute } from "./HostRoutes/newListRoutes/newListAmenitiesRoute";
import { newListTitleRoute } from "./HostRoutes/newListRoutes/newListTitleRoute";
import { newListDescriptionRoute } from "./HostRoutes/newListRoutes/newListDescriptionRoute";
import { newListDiscountRoute } from "./HostRoutes/newListRoutes/newListDiscount";
import { newListPriceRoute } from "./HostRoutes/newListRoutes/newListPriceRoute";
import { newListDescriptionRoute2 } from "./HostRoutes/newListRoutes/newListDescriptionRoute2";
import { newListImageRoute } from "./HostRoutes/newListRoutes/newListImageRoute";
import { newListStep1 } from "./HostRoutes/newListRoutes/newListStep1";
import { newListStep2 } from "./HostRoutes/newListRoutes/newListStep2";
import { newListStep3 } from "./HostRoutes/newListRoutes/newListStep3";
import { hostDashBoard } from "./HostRoutes/hostDashBoardRoute";

export const rootRoute = createRootRoute({
  component: App,
});

export const routeTree = rootRoute.addChildren([
  SignupRoute,
  emailVerificationRoute,
  homeRoute,
  loginRoute,
  hostParentRoute.addChildren([
    newlistOverviewRoute,
    newListStructureRoute,
    newListPrivacyRoute,
    newListFloorPlan,
    newListAmenitiesRoute,
    newListTitleRoute,
    newListDescriptionRoute,
    newListPriceRoute,
    newListDiscountRoute,
    newListDescriptionRoute2,
    newListImageRoute,
    newListStep1,
    newListStep2,
    newListStep3,
    hostDashBoard,
  ]),
]);
