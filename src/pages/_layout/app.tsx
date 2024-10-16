import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/header";
import { StayFilter } from "./components/ stay-filter";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col py-5 container mx-auto">
      <Header />

      <StayFilter />

      <div className="flex flex-1 flex-col gap-12 mt-10">
        <Outlet />
      </div>
    </div>
  );
};
