import { CartProvider } from "~/contexts/CartContext";
import Navbar from "~/layout/Navbar";
import "../styles/globals.css";

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
            <div className="p-y-2 container m-auto">{children}</div>
          </div>
        </CartProvider>
      </body>
    </html>
  );
};

export default HomePageLayout;
