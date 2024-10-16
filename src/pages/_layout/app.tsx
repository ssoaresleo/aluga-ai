import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/header";

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col py-5 container mx-auto">
      <Header />

      <div className="flex flex-1 flex-col gap-12 mt-10">
        <Outlet />
      </div>
    </div>
  );
};
