export default function CardProdutoHome() {
  return (
    <div className="border border-gray-200 px-4 py-2 bg-white min-w-product-card h-product-card flex flex-col items-center justify-between text-center">
      <img src="https://pneuzao.com.br/wp-content/uploads/2023/05/PNEU-BLACKLION-BF188-1-300x300.jpg" />
      <img
        className="max-w-36"
        src="https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png"
      />
      <text className="text-green-pz-2 font-medium">
        PNEU 295/80R22,5 18PR TL 152/149M BF188
      </text>
      <a
        href="/pneu"
        className="bg-green-pz  h-11 rounded-md flex justify-center items-center w-full"
      >
        <text className="text-white text-sm font-medium">VER DETALHES</text>
      </a>
    </div>
  );
}
