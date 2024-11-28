import { Outlet } from "react-router-dom";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <ToastContainer />
      </main>
    </>
  );
}

export default MainLayout;
