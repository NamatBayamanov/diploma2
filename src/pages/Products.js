import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { getProduct } from "../data/Products";

function Products() {

  const params = useParams();

  const product = getProduct(params.productId);
  if (!product) {
    return null
  }
  
  return ( 
    <>
      <Header title={product.title} image={product.image}>
        {product.description}
      </Header>
    </>
  );
}

export default Products;