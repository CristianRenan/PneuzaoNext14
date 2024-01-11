import CartIcon from "../icons/cart";

export default function MapLojas() {
  return (
    <section className="w-full h-auto items-center flex justify-center py-6">
      <div className="w-row  h-auto flex flex-col gap-4">
        <text className="font-medium text-lg">
          Lojas Pneuzão linha profissional
        </text>
        <iframe
          className="w-full h-map-box rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14411.745893431686!2d-49.3390203!3d-25.4403873!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3cdec00f45f%3A0x272d8cce343d2d3a!2sPneuz%C3%A3o%20%7C%20Linha%20Profissional%20-%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1705000339737!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </section>
  );
}
