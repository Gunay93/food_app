import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";
import { ReduxProvider } from "./providers";

export const metadata = {
  title: "My App",
  description: "Next.js Layout with Header and Footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
