import { type Product } from "@prisma/client";
import Link from "next/link";
import ProductList from "~/components/ProductList";

const getProducts = async () => {
  const response = await fetch(
    `${process.env.BASE_URL || "http://localhost:3000"}/api/products`
  );
  const products: Product[] = await response.json();
  return products;
};

const HomePage = async () => {
  const products = await getProducts();

  return (
    <div className="container m-auto py-2">
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
