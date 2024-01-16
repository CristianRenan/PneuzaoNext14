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

export default function BannerDesktop() {
  const [isLoading, setisLoading] = useState<boolean>(false);

  return (
    <section className="w-ful h-auto flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="w-row  h-96 flex items-center">
          <Skeleton className="w-row  h-banner-default rounded-lg bg-white" />
        </div>
      ) : (
        <div className="w-row  h-96 flex items-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_bkt_desktop.jpeg"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_blacklion_desktop.jpeg"
                  className="rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://pneuzao.com.br/wp-content/uploads/slider2/banner-home_brutus_desktop.jpeg"
                  className="rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </section>
  );
}
