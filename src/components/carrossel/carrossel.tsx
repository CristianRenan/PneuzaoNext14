"use client";

import CardProdutoHome from "../cardProdutoHome/cardProdutoHome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";

export default function Carrossel() {
  const products = [
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "123",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "1234",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
    {
      productImg:
        "https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg",
      brandImg: "https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png",
      productName: "PNEU 295/80R22,5 18PR TL 152/149M BF188",
      permaLink: "/pneu",
      productId: "12345",
    },
  ];

  return (
    <section className="w-full h-auto flex flex-col items-center justify-cente gap-4">
      <div className="w-row  h-auto flex flex-col">
        <text className="font-medium text-lg">Nossos Destaques</text>
      </div>
      <div className="w-row h-auto flex">
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
            {products.map((item) => (
              <CarouselItem key={item.productId} className="pl-0 basis-1/5">
                <CardProdutoHome key={item.productId} />
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
