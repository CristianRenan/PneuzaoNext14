export default function BannerDesktop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-ful h-auto flex flex-col items-center justify-center">
      <div className="w-row  h-96 flex items-center">
        <img
          src="https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_bkt_desktop.jpeg"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
