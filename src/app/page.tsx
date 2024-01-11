import BannerDesktop from "./components/banner/bannerDesktop";
import Carrossel from "./components/carrossel/carrossel";
import Instagram from "./components/instagram/instagram";
import MapLojas from "./components/mapLojas/mapLojas";
import MenuModelosDesktop from "./components/menuModelos/menuModelosDesktop";

export default function HomePage() {
  return (
    <>
      <BannerDesktop />
      <MenuModelosDesktop />
      <MapLojas />
      <Carrossel />
      <Instagram />
    </>
  );
}
