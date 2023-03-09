import { CartProvider } from "~/contexts/CartContext";
import Navbar from "~/layout/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const HomePageLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <CartProvider>
          <div>
            <Navbar />
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
};

export default HomePageLayout;
