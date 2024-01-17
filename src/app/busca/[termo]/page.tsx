import CardProdutoHome from "@/components/cardProdutoHome/cardProdutoHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Busca",
  description: "teste de meta data",
};
export default function BuscaPage({ params }: { params: { termo: string } }) {
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
    <div className="flex flex-col items-center w-full mt-6">
      <div className="flex flex-col h-auto w-row gap-6">
        <section className="w-full h-auto flex items-center gap-2 text-gray-500 text-xs">
          <text>Home</text>
          <text>{">"}</text>
          <text>Busca</text>
          <text>{">"}</text>
          <text>{params.termo}</text>
        </section>
        <section className="w-full h-auto min-h-96 flex items-start gap-7">
          <div className="flex flex-col border border-black w-60">
            <text>FILTRO</text>
          </div>
          <div className="flex flex-col  w-full">
            <text>Resultado de busca por {params.termo}</text>
            <div className="w-full flex flex-wrap">
              {products.map((item) => (
                <CardProdutoHome />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
