import DashBoard from "./DashBoard"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function PageManager() {
    return (
        <Router>
            <Routes>
                <Route element={<Login />} path="/login"></Route>
                <Route element={<DashBoard />} path="/"></Route>
            </Routes>
        </Router>
    )
}

export default PageManager