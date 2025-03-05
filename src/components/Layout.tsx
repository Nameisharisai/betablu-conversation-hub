
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white transition-colors duration-200">
      <Navbar />
      <main className="flex-1 w-full max-w-[1400px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
