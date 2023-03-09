import ProductHero from "~/components/ProductHero";

const getProduct = async (productId: string) => {
  const response = await fetch(
    `${
      process.env.BASE_URL || "http://localhost:3000"
    }/api/product/${productId}`
  );
  const product = await response.json();
  return product;
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getProduct(id);

  return (
    <div className="container m-auto py-2">
      <ProductHero product={product} />
    </div>
  );
};

export default ProductPage;
