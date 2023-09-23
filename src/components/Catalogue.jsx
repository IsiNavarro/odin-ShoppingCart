const Catalogue = () => {
  const CategoryButton = ({ TextContent }) => {
    return (
      <button className="text-center justify-center text-sm px-2 py-1 border-[1px] border-slate-950 focus:bg-slate-950 focus:text-white">
        {TextContent}
      </button>
    );
  };
  const ProductCard = ({ imgURL, productTitle, productPrice }) => {
    return (
      <div className="w-36 lg:w-48 flex flex-col justify-center gap-1 text-sm">
        <img
          className="w-full aspect-square object-cover"
          src={imgURL}
          alt={productTitle}
        />
        <h3>{productTitle.toUpperCase()}</h3>
        <h4 className="text-xs">{productPrice}€</h4>
      </div>
    );
  };
  return (
    <section className="min-h-screen lg:px-56">
      <h2 className="font-bold text-center py-2">VIEW ALL OUR CATALOGUE</h2>
      <div className="flex flex-wrap gap-1 items-center justify-center">
        <CategoryButton TextContent={'VIEW ALL'} />
        <CategoryButton TextContent={'SOFAS & SITTING'} />
        <CategoryButton TextContent={'TABLES'} />
        <CategoryButton TextContent={'BEDROOM FURNITURE'} />
        <CategoryButton TextContent={'STORAGE SOLUTIONS'} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 py-4 lg:py-8">
        <ProductCard
          imgURL={
            'https://i.pinimg.com/1200x/bb/bb/76/bbbb765633bf1fee9721f38eb217424c.jpg'
          }
          productTitle={'Ärbae cool duper chair'}
          productPrice={'499.00'}
        />
      </div>
    </section>
  );
};

export default Catalogue;
