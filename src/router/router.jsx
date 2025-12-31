import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../layout/main/MainLayout';
import Home from '../page/public/public_home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);

export default router;
