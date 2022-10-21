import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { LoginPage } from "../../pages/external";

const externalRoutes = (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
)

export default externalRoutes;