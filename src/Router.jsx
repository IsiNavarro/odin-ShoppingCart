import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import ErrorPage from './components/ErrorPage';

import Products from './data/furniture.json';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App child={<Home />} />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'catalogue',
      element: <App child={<Catalogue products={Products} />} />,
    },
    { path: 'about-us', element: <App child={<AboutUs />} /> },
    {
      path: 'product/:productName',
      element: <App child={<Product products={Products} />} />,
    },
  ]);
  return <RouterProvider router={router} />;
};
