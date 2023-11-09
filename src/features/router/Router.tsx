import { Route, Routes } from "react-router-dom";
import ROUTES from "./models/routes";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import MapPage from "../maps/pages/MapPage";
import Calendar from "../pages/Calendar";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<DashboardPage />} />
      <Route path={ROUTES.MAP} element={<MapPage />} />
      <Route path={ROUTES.CALENDAR} element={<Calendar />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
