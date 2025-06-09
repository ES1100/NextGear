import React from "react";
import { Routes, Route } from "react-router-dom";
import { CUSTOM_ROUTES } from "../constants/custom-routse";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";

import Layout from "../Layout/Layout";
const CustomRoutes = () => {
  return (
    <Routes>
      <Route
        path={CUSTOM_ROUTES.HOME}
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
   
     
      <Route
        path={CUSTOM_ROUTES.CONTACT}
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path={CUSTOM_ROUTES.ABOUT_US}
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path={CUSTOM_ROUTES.CART}
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
