import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { CUSTOM_ROUTES } from "./constants/custom-routse";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={CUSTOM_ROUTES.HOME} element={<Home />} />
          <Route path={CUSTOM_ROUTES.CONTACT} element={<Contact />} />
          <Route path={CUSTOM_ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={CUSTOM_ROUTES.CART} element={<Cart />} />
          <Route
            path={CUSTOM_ROUTES.CATEGORY(":categoryName")}
            element={<CategoryPage />}
          />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
