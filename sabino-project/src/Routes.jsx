import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ErrorPage" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
