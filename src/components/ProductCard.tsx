import { type Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="rounded-md border bg-white p-4 shadow-md transition-all hover:bg-gray-100 hover:shadow-lg">
        <img src={product.imageUrl} className="mb-2" alt={product.name} />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
