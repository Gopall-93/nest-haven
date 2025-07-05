import { Outlet, useMatches } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "./components/navbar";

const App = () => {
  const routes = useMatches();
  const id = routes[1].routeId;
  const match =
    id === "/user/login" ||
    id === "/user/signup" ||
    id === "/email-verification" ||
    id.includes("/host");

  return (
    <>
      {!match && <Navbar />}
      <Toaster richColors position="top-center" closeButton duration={3000} />
      <Outlet />
    </>
  );
};

export default App;
