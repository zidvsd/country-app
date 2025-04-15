import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ChildPage from "../pages/ChildPage";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFound";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<HomePage />} />

        <Route path="country/:id" element={<ChildPage />} />
      </Route>
    </Routes>
  );
};
export default Router;
