import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './js-components/Pages/LandingPage';
import SignUpPage from "./js-components/Pages/SignUpPage";
import SignInPage from "./js-components/Pages/SignInPage";
import HomePageLAyout from "./js-components/Home-page-components/components/HomePageLAyout";
import DashboardPage from "./js-components/Pages/Home-pages/DashboardPage";
import VehiclePage from "./js-components/Pages/Home-pages/VehiclePage";
import DriverPage from "./js-components/Pages/Home-pages/DriverPage";
import LiveTrackPage from "./js-components/Pages/Home-pages/LiveTrackPage";
import FillUpPage from "./js-components/Pages/Home-pages/FillUpPage";
import MaintenancePage from "./js-components/Pages/Home-pages/MaintenancePage";
import UserManagementPage from "./js-components/Pages/Home-pages/UserManagementPage";
import ReportPage from "./js-components/Pages/Home-pages/ReportPage";
import TripsPage from "./js-components/Pages/Home-pages/TripsPage";
import SettingsPage from "./js-components/Pages/Home-pages/SettingsPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Fleet-management/" element={<LandingPage />} />
        <Route path="/Fleet-management/signUp-page" element={<SignUpPage />} />
        <Route path="/Fleet-management/signIn-page" element={<SignInPage />} />
        <Route element={<HomePageLAyout />}>
          <Route path="/Fleet-management/dashboard-page" element={<DashboardPage />} />
          <Route path="/Fleet-management/vehicle-page" element={<VehiclePage />} />
          <Route path="/Fleet-management/driver-page" element={<DriverPage />} />
          <Route path="/Gamma-Fleet/liveTrack-page" element={<LiveTrackPage />} />
          <Route path="/Fleet-management/fillUp-page" element={<FillUpPage />} />
          <Route path="/Fleet-management/maintenance-page" element={<MaintenancePage />} />
          <Route path="/Fleet-management/user-management-page" element={<UserManagementPage />} />
          <Route path="/Fleet-management/report-page" element={<ReportPage />} />
          <Route path="/Fleet-management/trips-page" element={<TripsPage />} />
          <Route path="/Fleet-management/settings-page" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
