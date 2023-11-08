import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HowTo = React.lazy(() => import("pages/HowTo"));
const Shoppingcart = React.lazy(() => import("pages/Shoppingcart"));
const Productpage = React.lazy(() => import("pages/Productpage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/howto" element={<HowTo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
