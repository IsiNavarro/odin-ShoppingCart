import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = ({ products }) => {
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

  const AddingCounter = ({ quantity }) => {
    return (
      <div className="flex">
        <button
          onClick={handleReduce}
          className="h-10 w-10 bg-gray-100 flex items-center justify-center"
        >
          -
        </button>
        <div className="h-10 w-10 border-[1px] border-slate-900 flex items-center justify-center">
          {quantity}
        </div>
        <button
          onClick={handleIncrement}
          className="h-10 w-10 bg-gray-100 flex items-center justify-center"
        >
          +
        </button>
      </div>
    );
  };

  return (
    <section className="max-w-[1000px] px-4 flex items-center justify-center">
      <div className="rounded-md shadow-md p-10 flex flex-col">
        <div>
          <h2 className="font-bold text-lg">{product.name}</h2>
          <h3 className="font-bold">{Number(product.price).toFixed(2)} €</h3>
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
          <AddingCounter quantity={quantity} />
          <button className="w-full bg-gray-950 text-white py-3">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
