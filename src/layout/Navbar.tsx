import Link from "next/link";
import CartCount from "~/components/CartCount";

const Navbar = () => {
  return (
    <div className=" bg-primary p-2 text-white">
      <div className="container m-auto flex items-center justify-between">
        <Link href="/">
          <h1>Ma boutique</h1>
        </Link>
        <Link href="/cart">
          Panier <CartCount />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
