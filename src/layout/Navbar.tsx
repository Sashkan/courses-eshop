import Link from "next/link";
import CartCount from "~/components/CartCount";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <h1>Ma boutique</h1>
      </Link>
      <Link href="/cart">
        Panier <CartCount />
      </Link>
    </div>
  );
};

export default Navbar;
