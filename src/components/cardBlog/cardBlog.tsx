interface PropTypes {
  key: string;
}

export default function CardBlog({ key }: PropTypes) {
  return (
    <div key={key} className="w-1/4 h-product-card flex flex-col gap-2">
      <img
        className="rounded-lg"
        src="https://pneuzao.com.br/wp-content/uploads/2023/05/gente-nossa-400x250.jpg"
      />
      <text className="font-medium text-lg text-start">
        Gente nossa Pneuzão - Fazenda Bom Jardim Alagoano
      </text>
      <text className="text-start text-gray-700">
        Fala moçada, tudo bem com vocês? Hoje abordaremos brevemente o
        importante papel de um fornecedor de pneus, seu compromisso com o...
      </text>
      <a href={"#"}>
        <text className="text-start text-green-pz-2 font-semibold">
          Ler artigo {">"}
        </text>
      </a>
    </div>
  );
}
