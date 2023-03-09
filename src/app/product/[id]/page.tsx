import Image from "next/image";
import AddToCart from "~/components/AddToCart";

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
    <div>
      <h1>{product?.name}</h1>
      <Image
        src={product?.imageUrl}
        alt={product?.name}
        width={400}
        height={400}
      />
      <AddToCart product={product} />
    </div>
  );
};

export default ProductPage;
