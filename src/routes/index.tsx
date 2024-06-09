import { Route, Routes } from "react-router-dom";
import { Error, Notification } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={null} errorElement={<Error />}>
        <Route path="notification/:id" element={<Notification />} />
      </Route>
    </Routes>
  );
};
