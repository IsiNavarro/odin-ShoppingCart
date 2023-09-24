import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import uniqid from 'uniqid';

import App from './App';

import Home from './components/Home';
import Catalogue from './components/Catalogue';
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

    const productName = counter.getAttribute('data-product');

    const product = {
      ...Products.find((product) => product.name === productName),
    };

    product.quantity = Number.parseInt(quantity);
    product.id = uniqid();

    setCartItems((prevItems) => [...prevItems, product]);
  }

  function deleteItemFromCart(event) {
    const itemId = event.currentTarget.id;
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <App
          cartItems={cartItems}
          deleteItemFromCart={deleteItemFromCart}
          child={<Home />}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: 'catalogue',
      element: (
        <App
          cartItems={cartItems}
          deleteItemFromCart={deleteItemFromCart}
          child={<Catalogue products={Products} />}
        />
      ),
    },
    {
      path: 'product/:productName',
      element: (
        <App
          cartItems={cartItems}
          deleteItemFromCart={deleteItemFromCart}
          child={<Product products={Products} addItemToCart={addItemToCart} />}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
