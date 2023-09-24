import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = ({ products, addItemToCart }) => {
  const [quantity, setQuantity] = useState(0);
  let { productName } = useParams();

  //filter method returns an array, so we have to add [0] for the single item
  const product = products.filter((product) => product.name === productName)[0];

  function handleReduce() {
    quantity <= 0 ? setQuantity(0) : setQuantity((prev) => prev - 1);
  }
  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  const AddingCounter = ({ quantity, addItemToCart }) => {
    return (
      <div className="w-full flex flex-col gap-2 self-center">
        <div className="flex self-center">
          <button
            onClick={handleReduce}
            className="h-10 w-10 bg-gray-100 flex items-center justify-center"
          >
            -
          </button>
          <div
            id="product-quantity"
            data-product={product.name}
            className="h-10 w-10 border-[1px] border-slate-100 flex items-center justify-center"
          >
            {quantity}
          </div>
          <button
            onClick={handleIncrement}
            className="h-10 w-10 bg-gray-100 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <button
          onClick={addItemToCart}
          className="tracking-widest w-full bg-gray-950 text-white py-3 focus:scale-[99%]"
        >
          ADD TO CART
        </button>
      </div>
    );
  };

  return (
    <section className="max-w-[1000px] mt-[100px] lg:mt-[125px] px-4 flex items-center justify-center">
      <div className="rounded-md shadow-md p-10 flex flex-col">
        <div>
          <h2 className="tracking-wider font-bold text-lg">
            {product.name.toUpperCase()}
          </h2>
          <h3 className="tracking-wider font-bold">
            {Number(product.price).toFixed(2)} €
          </h3>
        </div>
        <img
          className="w-[425px] object-cover self-center"
          src={product.imageURL}
          alt={product.name}
        />
        <div className="flex flex-col gap-2">
          <p className="mb-4">{product.description}</p>
          <h3 className="text-xs font-bold">
            {Number(product.price).toFixed(2)} €
          </h3>
          <AddingCounter quantity={quantity} addItemToCart={addItemToCart} />
        </div>
      </div>
    </section>
  );
};

export default Product;
