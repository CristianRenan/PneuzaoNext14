interface PropTypes {
  key: string;
}

export default function CardLojas({ key }: PropTypes) {
  return (
    <div key={key} className=" h-auto flex flex-col items-center gap-1">
      <img
        className="rounded-lg w-full"
        src="https://pneuzao.com.br/wp-content/uploads/elementor/thumbs/PVL-loja-site-q87ant4lmiqdukng9bum72khs6hoj58fips7t054je.jpg"
      />
      <text className="text-xl font-medium">Nome da Lojas - PR</text>
      <text>(41) 99999-9999</text>
    </div>
  );
}
