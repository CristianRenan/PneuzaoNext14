import CardProdutoHome from "../cardProdutoHome/cardProdutoHome";

export default function Carrossel() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-cente gap-4">
      <div className="w-row  h-auto flex flex-col">
        <text className="font-medium text-lg">Nossos Destaques</text>
      </div>
      <div className="w-row h-auto flex overflow-x-scroll pb-2">
        <CardProdutoHome />
        <CardProdutoHome />
        <CardProdutoHome />
        <CardProdutoHome />
        <CardProdutoHome />
        <CardProdutoHome />
        <CardProdutoHome />
      </div>
    </section>
  );
}
