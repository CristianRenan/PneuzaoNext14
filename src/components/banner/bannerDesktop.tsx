"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";

export default function BannerDesktop() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const banners = [
    {
      bannerImg:
        "https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_bkt_desktop.jpeg",
      bannerLink: "#",
      bannerAlt: "Banner de teste, aqui é uma descrição do conteudo da imagem.",
      bannerId: "123",
    },
    {
      bannerImg:
        "https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_blacklion_desktop.jpeg",
      bannerLink: "#",
      bannerAlt: "Banner de teste, aqui é uma descrição do conteudo da imagem.",
      bannerId: "123",
    },
    {
      bannerImg:
        "https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_brutus_desktop.jpeg",
      bannerLink: "#",
      bannerAlt: "Banner de teste, aqui é uma descrição do conteudo da imagem.",
      bannerId: "123",
    },
  ];

  return (
    <section className="w-ful h-auto flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="w-row  h-96 flex items-center">
          <Skeleton className="w-row  h-banner-default rounded-lg bg-white" />
        </div>
      ) : (
        <div className="w-row  h-96 flex items-center">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {banners.map((item) => (
                <CarouselItem key={item.bannerId}>
                  <a href={item.bannerLink} target="_blank">
                    <img
                      src={item.bannerImg}
                      className="rounded-lg"
                      alt={item.bannerAlt}
                      title={item.bannerAlt}
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </section>
  );
}
