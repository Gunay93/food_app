import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
export const metadata = {
  title: "My App",
  description: "Next.js Layout with Header and Footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
