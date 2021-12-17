import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import reportWebVitals from "./reportWebVitals";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import LocationPage from "./pages/LocationPage/LivingPlacePage";
import Error404 from "./pages/Error404Page/Error404";
import MainHeader from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainHeader />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route
                    exact
                    path="/location/:locationId"
                    element={<LocationPage />}
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
