export default function AplicacoesPneu() {
  return (
    <div className="flex flex-col mt-4">
      <text className="font-medium text-lg text-green-pz-2">APLICAÇÕES</text>
      <div className="h-28 w-full flex gap-5 items-center mb-4">
        <div className=" w-28 flex flex-col items-center gap-2">
          <img src="https://pneuzao.com.br/wp-content/uploads/2023/09/utilitario-leve.svg" />
          <text className="text-xs">UTILITÁRIOS LEVES</text>
        </div>
        <div className=" w-28 flex flex-col items-center gap-2">
          <img src="https://pneuzao.com.br/wp-content/uploads/2023/09/utilitario-leve.svg" />
          <text className="text-xs">UTILITÁRIOS LEVES</text>
        </div>
        <div className=" w-28 flex flex-col items-center gap-2">
          <img src="https://pneuzao.com.br/wp-content/uploads/2023/09/utilitario-leve.svg" />
          <text className="text-xs">UTILITÁRIOS LEVESS</text>
        </div>
      </div>
      <text className="text-xs">
        LEGENDA: - <span className="font-medium">D:</span> Direcional -{" "}
        <span className="font-medium">T:</span>
        Tração - <span className="font-medium">L:</span> Eixo livre -{" "}
        <span className="font-medium">TP:</span> Todas posições
      </text>
    </div>
  );
}
