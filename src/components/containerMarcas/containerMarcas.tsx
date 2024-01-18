"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function ContainerMarcas() {
  const marcas = [
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
    {
      nomeMarca: "BlackLion",
      imgMarca:
        "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg",
      idMarca: "123",
    },
  ];

  return (
    <section className="w-full h-auto flex flex-col items-center justify-cente py-5">
      <div className="w-row  h-auto flex flex-col gap-5">
        <text className="font-medium text-lg">
          Trabalhamos com as melhores marcas
        </text>
        <div className="w-full h-auto flex gap-4 bg-white">
          <Carousel
            className="w-row"
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {marcas.map((item) => (
                <CarouselItem
                  key={item.idMarca}
                  className="h-28 pl-0 basis-1/5 flex items-center justify-center"
                >
                  <img
                    src={
                      "https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/brand-blacklion-q86zcwrpwixb9a779ihckw896n7vytnydl6q98cfa0.jpg"
                    }
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
