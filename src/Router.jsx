import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import ErrorPage from './components/ErrorPage';

import Products from './data/furniture.json';

export const Router = () => {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart() {
    const counter = document.getElementById('product-quantity');
    const quantity = counter.textContent;
    if (quantity === '0') {
      setCartItems((prevItems) => [...prevItems]);
      return;
    }

    const productID = counter.getAttribute('data-product');
    console.log(productID);
    console.log(Products);

    const product = Products.filter(
      (product) => product.id === Number.parseInt(productID)
    )[0];

    product.quantity = Number.parseInt(quantity);
    console.log(product);
    setCartItems((prevItems) => [...prevItems, product]);
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cartItems={cartItems} child={<Home />} />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'catalogue',
      element: (
        <App cartItems={cartItems} child={<Catalogue products={Products} />} />
      ),
    },
    {
      path: 'about-us',
      element: <App cartItems={cartItems} child={<AboutUs />} />,
    },
    {
      path: 'product/:productName',
      element: (
        <App
          cartItems={cartItems}
          child={<Product products={Products} addItemToCart={addItemToCart} />}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
