import { useState } from 'react';
import { Link } from 'react-router-dom';

const Catalogue = ({ products }) => {
  const [items, setItems] = useState(products);
  const CategoryButton = ({ TextContent }) => {
    return (
      <button className="text-center justify-center text-sm px-2 py-1 border-[1px] border-slate-950 focus:bg-slate-950 focus:text-white">
        {TextContent}
      </button>
    );
  };
  const ProductCard = ({ imgURL, productTitle, productPrice }) => {
    return (
      <Link
        to={productTitle}
        className="w-36 lg:w-48 flex flex-col justify-center gap-1 text-sm"
      >
        <img
          className="w-full aspect-square object-cover"
          src={imgURL}
          alt={productTitle}
        />
        <h3>{productTitle.toUpperCase()}</h3>
        <h4 className="text-xs">{Number(productPrice).toFixed(2)}€</h4>
      </Link>
    );
  };
  return (
    <section className="min-h-screen lg:px-56">
      <h2 className="font-bold text-center py-2">VIEW ALL OUR CATALOGUE</h2>
      <div className="flex flex-wrap gap-1 items-center justify-center">
        <CategoryButton TextContent={'VIEW ALL'} />
        <CategoryButton TextContent={'SOFAS AND SITTING'} />
        <CategoryButton TextContent={'TABLES'} />
        <CategoryButton TextContent={'BEDROOM FURNITURE'} />
        <CategoryButton TextContent={'STORAGE SOLUTIONS'} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 lg:py-8">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            imgURL={item.imageURL}
            productTitle={item.name}
            productPrice={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalogue;
