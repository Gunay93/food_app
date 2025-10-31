import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Products from "../components/Products";
import Slider from "../components/Slider";
import "./page.module.css";

export default function Home() {
  return (
    <>
      <Slider />
      <Feature />
      <Banner />
      <Products />
    </>
  );
}
