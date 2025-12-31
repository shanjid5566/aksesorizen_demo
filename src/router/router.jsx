import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../layout/main/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<div>Home Page</div>} />
      </Route>
    </>
  )
);

export default router;
