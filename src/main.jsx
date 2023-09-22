import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Product from './components/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: 'catalogue', element: <Catalogue /> },
  { path: 'about-us', element: <AboutUs /> },
  { path: 'product', element: <Product /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
