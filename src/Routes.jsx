import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MacBookAirTwo = React.lazy(() => import("pages/MacBookAirTwo"));
const MacBookAirOne = React.lazy(() => import("pages/MacBookAirOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MacBookAirOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/macbookairtwo" element={<MacBookAirTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
