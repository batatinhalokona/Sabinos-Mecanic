import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/ErrorPage" element={<ErrorPage />}></Route>
        </Routes>
    )
}