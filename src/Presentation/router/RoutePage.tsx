import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const HomeView = lazy(() => import("@Presentation/views/home/HomeView"));


const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
};

export default RouterPage;
