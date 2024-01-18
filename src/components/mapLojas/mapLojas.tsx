"use client";

import Autoplay from "embla-carousel-autoplay";
import CardLojas from "../cardLojas/cardLojas";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function MapLojas() {
  const lojas = [
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1233",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1234",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1235",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1236",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1237",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1238",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1239",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "1230",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "12322",
    },
    {
      nomeLoja: "Alta Floresta - MT",
      imgLoja:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg",
      telLoja: "41 - 99999-9999",
      idLoja: "12333",
    },
  ];

  return (
    <section className="w-full h-auto items-center flex-col flex justify-center py-6">
      <div className="w-row  h-auto flex flex-col gap-4">
        <text className="font-medium text-lg">
          Lojas Pneuzão linha profissional
        </text>
      </div>
      <iframe
        className="w-full h-map-box"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14411.745893431686!2d-49.3390203!3d-25.4403873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3cdec00f45f%3A0x272d8cce343d2d3a!2sPneuz%C3%A3o%20%7C%20Linha%20Profissional%20-%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1705000339737!5m2!1spt-BR!2sbr"
      ></iframe>
      <div className="w-row -mt-20">
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {lojas.map((item) => (
              <CarouselItem key={item.idLoja} className="pl-5 basis-1/5">
                <CardLojas key={item.idLoja} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
