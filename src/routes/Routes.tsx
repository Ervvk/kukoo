import { Route, Routes as Router } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout/MainLayout';
import { Login } from '../features/auth/pages';
import { useIsLogged } from '../features/auth/stores/auth';
import { Home, Market } from '../pages';

import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  const isUserLogged = useIsLogged();

  return (
    <Router>
      <Route
        element={
          <ProtectedRoute isAuth={isUserLogged}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Router>
  );
};

export default Routes;
