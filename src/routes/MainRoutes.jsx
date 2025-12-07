import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
  const location = useLocation();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const path = location.pathname;

    const scrollOptions = { behavior: "smooth", block: "start" };

    if (path === "/") homeRef.current?.scrollIntoView(scrollOptions);
    if (path === "/about") aboutRef.current?.scrollIntoView(scrollOptions);
    if (path === "/worksample") workRef.current?.scrollIntoView(scrollOptions);
    if (path === "/contact") contactRef.current?.scrollIntoView(scrollOptions);
  }, [location]);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <Home
            homeRef={homeRef}
            aboutRef={aboutRef}
            workRef={workRef}
            contactRef={contactRef}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
