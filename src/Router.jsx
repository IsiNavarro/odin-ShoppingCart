import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import ErrorPage from './components/ErrorPage';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App child={<Home />} />,
      errorElement: <ErrorPage />,
    },
    { path: 'catalogue', element: <App child={<Catalogue />} /> },
    { path: 'about-us', element: <App child={<AboutUs />} /> },
    { path: 'product', element: <App child={<Product />} /> },
  ]);
  return <RouterProvider router={router} />;
};
