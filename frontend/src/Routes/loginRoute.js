import { createRoute, useLocation } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
// import { LoginPage } from "../Pages/LoginPage";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user/login",
  
}).lazy(()=>import("../Pages/LoginPage").then((d)=>d.Route));
