import CartContent from "~/components/CartContent";
import CartValue from "~/components/CartValue";
import CheckoutCart from "~/components/CheckoutCart";

const CartPage = () => {
  return (
    <div>
      <h1>Panier</h1>
      <CartContent />
      <CartValue />
      <CheckoutCart />
    </div>
  );
};

export default CartPage;
