import { type Product } from "@prisma/client";
import Link from "next/link";

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
    <div>
      <h1>My products</h1>
      <ul>
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
