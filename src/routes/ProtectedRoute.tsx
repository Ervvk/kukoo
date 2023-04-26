import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '../types';

interface ProtectedRouteProps extends ChildrenProps {
  isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  if (isAuth !== true) return <Navigate to="/login" replace />;

  return <>{isAuth === true && children}</>;
};

export default ProtectedRoute;
