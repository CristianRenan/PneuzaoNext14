import AplicacoesPneu from "@/components/aplicacoesPneu/aplicacoesPneu";
import Carrossel from "@/components/carrossel/carrossel";
import TablePneu from "@/components/tablePneu/tablePneu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNEU LT205/70R15",
  description: "teste de meta data",
};

export default function PneuPage() {
  return (
    <div className="flex flex-col items-center w-full mt-6">
      <div className="flex flex-col h-auto w-row">
        <div className="w-full h-auto flex items-center gap-2 text-gray-500 text-xs">
          <text>Home</text>
          <text>{">"}</text>
          <text>Pneu Nome do pneu</text>
        </div>
        <div className="w-full h-auto flex justify-between items-start">
          <div className="w-2/4 flex justify-center items-center p-9">
            <img
              className="max-w-full"
              src="https://pneuzao.com.br/wp-content/uploads/2023/04/PNEU-XBRI-BRUTUS-AT-1-640x640-1.jpg"
            />
          </div>
          <div className="w-2/4 flex flex-col pt-14">
            <img
              className="max-w-64 -ml-12"
              src="https://pneuzao.com.br/wp-content/uploads/marcas/bkt.png"
            />
            <h1 className="text-green-pz-2 font-bold text-3xl">
              PNEU LT205/70R15 8PR TL 102/99Q BRUTUS T/A XBRI
            </h1>
            <AplicacoesPneu />
            <TablePneu />
          </div>
        </div>
      </div>
      <Carrossel />
    </div>
  );
}
