import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import UserProfile from "./pages/userProfile/UserProfile.jsx";
import RootLayout from "./components/rootLayout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/product/Product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
