import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout/MainLayout';
import { Home, Market } from '../pages';

const Routes = () => {
  return (
    <Router>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Route>
    </Router>
  );
};

export default Routes;
