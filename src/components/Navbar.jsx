import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { FaBarsStaggered } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const itemsInCart = 1;

  const toogleHamburger = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <nav className="z-5 bg-white fixed top-0 left-0 w-full flex items-center justify-between px-2 md:px-10 lg:px-20 pt-4 pb-3 shadow-sm">
      <Link to={'/'}>
        <h1 className=" font-bold text-2xl lg:text-3xl px-2">RF Möbel</h1>
      </Link>

      <div className="flex items-center md:gap-20 px-2">
        {/* Hamburger */}
        <button onClick={toogleHamburger} className="md:hidden px-4 z-10">
          {!displayMenu ? <FaBarsStaggered size={20} /> : <ImCross size={15} />}
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-4 text-lg">
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
            <Link to={'/catalogue'}>CATALOGUE</Link>
          </li>
          <li>
            <Link to={'/about-us'}>ABOUT</Link>
          </li>
        </ul>

        {/* Cart button */}
        <button className="p-3 flex">
          {itemsInCart > 0 && (
            <span className="z-[8] absolute mt-[-11px] ml-[-16px] font-bold text-white border-[3px] border-white rounded-full h-[25px] w-[25px] bg-indigo-300 flex items-center justify-center">
              {itemsInCart}
            </span>
          )}
          <TfiShoppingCartFull size={32} className="lg:scale-110" />
        </button>
        <ul
          className={
            !displayMenu
              ? 'hidden'
              : 'md:hidden absolute z-[9] top-0 left-0 w-full h-screen bg-slate-100 flex flex-col justify-center items-center'
          }
        >
          <li className="py-6 text-2xl">
            <Link onClick={toogleHamburger} to="/" duration={500}>
              Home
            </Link>
          </li>

          <li className="py-6 text-2xl">
            <Link onClick={toogleHamburger} to="/catalogue" duration={500}>
              Catalogue
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link onClick={toogleHamburger} to="/about-us" duration={500}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
