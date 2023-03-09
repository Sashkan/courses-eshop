import { type Product } from "@prisma/client";
import AddToCart from "./AddToCart";

interface ProductHeroProps {
  product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center rounded-md border p-2">
        <img src={product.imageUrl} alt={product.name} className="h-56" />
      </div>
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-500">${product.price}</p>
        <p className="mt-4">Mon super produit</p>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductHero;
