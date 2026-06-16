import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../components/layout/MainLayout';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> }
    ]
  }
]);
