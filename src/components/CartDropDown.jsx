import { ImCross } from 'react-icons/im';

const CartDropDown = ({ cartItems, toggleCartShowing, deleteItemFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const Item = ({ name, image, quantity, id, deleteItemFromCart }) => {
    return (
      <div className="flex gap-2 ">
        <img
          className="w-[100px] h-[100px] object-cover"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="font-bold text-sm">{name}</h3>
          <h3>{id}</h3>
          <h4 className="text-xs">QTY: {quantity}</h4>
        </div>
        <button
          id={id}
          onClick={deleteItemFromCart}
          className="self-start justify-self-end"
        >
          <ImCross size={10} />
        </button>
      </div>
    );
  };
  const ItemList = ({ cartItems, deleteItemFromCart }) => {
    return (
      <div className="flex flex-col gap-2">
        {cartItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.imageURL}
            quantity={item.quantity}
            deleteItemFromCart={deleteItemFromCart}
          />
        ))}
      </div>
    );
  };
  return (
    <div className="fixed max-h-screen md:max-h-[500px] w-full flex flex-col gap-4 md:w-[350px] md:top-[5.5rem] md:right-24 border-2 p-2 md:p-4 bg-indigo-50 overflow-auto">
      <button className="self-end">
        <ImCross onClick={toggleCartShowing} />
      </button>
      {totalPrice <= 0 ? (
        <div className="h-screen flex items-center justify-center">
          Oops! Your cart is still empty...
        </div>
      ) : (
        <>
          <ItemList
            cartItems={cartItems}
            deleteItemFromCart={deleteItemFromCart}
          />
          <div className="font-bold self-end mt-4 text-sm">
            Total: {totalPrice} €
          </div>
          <button className="text-xs w-full bg-gray-950 text-white py-3 focus:scale-[99%]">
            VIEW CART
          </button>
        </>
      )}
    </div>
  );
};

export default CartDropDown;
