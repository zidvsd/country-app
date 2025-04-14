import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChildPage from "../pages/ChildPage";
import HomePage from "../pages/HomePage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="child" element={<ChildPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
