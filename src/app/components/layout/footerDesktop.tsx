import FacebookIcon from "../icons/facebook";
import SearchIcon from "../icons/search";

export default function FooterDesktop() {
  return (
    <footer className="w-full h-auto bg-white flex justify-center items-center flex-col gap-2 pt-10 mt-8">
      <div className="w-row h-auto flex flex-col items-center gap-5">
        <section className="w-full flex items-start justify-between">
          <img src="./pneuzao-logo.svg" />
          <div className="flex flex-col items-start gap-4">
            <text className="font-medium text-lg">Nossas Lojas</text>
            <div className="flex flex-col items-start text-gray-600 gap-1">
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
              <a href="#">
                <text>Alta Floresta - MT</text>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <text className="font-medium text-lg">Institucional</text>
            <div className="flex flex-col items-start text-gray-600 gap-1">
              <a href="#">
                <text>Quem somos</text>
              </a>
              <a href="#">
                <text>Dicionário de Pneu</text>
              </a>
              <a href="#">
                <text>Produtos</text>
              </a>
              <a href="#">
                <text>Produtos</text>
              </a>
              <a href="#">
                <text>Blog</text>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <text className="font-medium text-lg">Contato</text>
            <div className="flex flex-col items-start text-gray-600 gap-1">
              <a href="#">
                <text>Entre em contato</text>
              </a>
              <a href="#">
                <text>contato@pneuzao.com.br</text>
              </a>
            </div>
            <text className="font-medium text-lg">Siga nas Redes</text>
            <div className="flex gap-2">
              <div className="bg-green-pz hover:bg-yellow-pz w-10 h-10 rounded-full transition-all flex items-center justify-center">
                <FacebookIcon fill={"white"} />
              </div>
              <div className="bg-green-pz hover:bg-yellow-pz w-10 h-10 rounded-full transition-all flex items-center justify-center">
                <FacebookIcon fill={"white"} />
              </div>
              <div className="bg-green-pz hover:bg-yellow-pz w-10 h-10 rounded-full transition-all flex items-center justify-center">
                <FacebookIcon fill={"white"} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col border-t-2 py-4 gap-4">
          <text className="font-medium text-lg">Medidas mais buscadas</text>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <text className="font-medium">Agricola:</text>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
              </div>
              <text className="text-green-pz font-medium text-xs">
                todas as opções
              </text>
            </div>
            <div className="flex items-center gap-2">
              <text className="font-medium">Agricola:</text>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
              </div>
              <text className="text-green-pz font-medium text-xs">
                todas as opções
              </text>
            </div>
            <div className="flex items-center gap-2">
              <text className="font-medium">Agricola:</text>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
              </div>
              <text className="text-green-pz font-medium text-xs">
                todas as opções
              </text>
            </div>
            <div className="flex items-center gap-2">
              <text className="font-medium">Agricola:</text>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
                <text>|</text>
                <text>11.5/80-15.3</text>
              </div>
              <text className="text-green-pz font-medium text-xs">
                todas as opções
              </text>
            </div>
          </div>
        </section>
      </div>
      <section className="w-full bg-green-pz-2 h-14 flex items-center justify-center">
        <text className="text-white text-sm">
          Pneuzão Linha Profissional® - Todos os direitos reservados.
        </text>
      </section>
    </footer>
  );
}
