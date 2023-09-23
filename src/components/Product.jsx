import { useParams } from 'react-router-dom';

const Product = ({ products }) => {
  let { productName } = useParams();

  //filter method returns an array, so we have to add [0] for the single item
  const product = products.filter((product) => product.name === productName)[0];

  return <div className="min-h-screen">{product.name}</div>;
};

export default Product;
