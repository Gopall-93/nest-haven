import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { HomePage } from "../Pages/HomePage";
import { handleLoad } from "../utils/handleLoad.js";

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
  beforeLoad: handleLoad,
});
