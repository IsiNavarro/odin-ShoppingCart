import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import ErrorPage from './components/ErrorPage';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    { path: 'catalogue', element: <Catalogue /> },
    { path: 'about-us', element: <AboutUs /> },
    { path: 'product', element: <Product /> },
  ]);
  return <RouterProvider router={router} />;
};
