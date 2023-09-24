import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDropDown from './components/CartDropDown';

const App = ({ child, cartItems, deleteItemFromCart }) => {
  const [cartShowing, setCartShowing] = useState(false);
  function toggleCartShowing() {
    setCartShowing(!cartShowing);
  }
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar cartItems={cartItems} toggleCartShowing={toggleCartShowing} />
      <div className="flex items-center justify-center">{child}</div>
      <Footer />
      {cartShowing && (
        <CartDropDown
          cartItems={cartItems}
          deleteItemFromCart={deleteItemFromCart}
          toggleCartShowing={toggleCartShowing}
        />
      )}
    </div>
  );
};

export default App;
