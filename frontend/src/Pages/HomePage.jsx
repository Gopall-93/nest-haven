import { useSearch } from "@tanstack/react-router";
import {useMutation} from "@tanstack/react-query"
import { toast } from "sonner";
import Card from "../components/Card";

export const HomePage = () => {
  const { success, message } = useSearch({ from: "/" });

  if (success) {
    toast.success("Email verified 🎉");
  } else if (message) {
    toast.success(message);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
