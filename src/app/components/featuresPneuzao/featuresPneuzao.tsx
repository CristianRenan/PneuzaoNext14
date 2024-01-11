import CartIcon from "../icons/cart";

export default function FeaturesPneuzao() {
  return (
    <section className="w-full h-20 items-center flex justify-between">
      <div className="flex items-center gap-2 w-feature-box">
        <CartIcon fill={"#004a1f"} w={"25"} h={"25"} />
        <div className="flex flex-col">
          <text className="text-green-pz-2 font-semibold text-xl -mb-1">
            Pneus para uso profissional
          </text>
          <text className="font-thin">Agricola, Industrial e OTR</text>
        </div>
      </div>

      <div className="flex items-center gap-2 w-feature-box">
        <CartIcon fill={"#004a1f"} w={"25"} h={"25"} />
        <div className="flex flex-col">
          <text className="text-green-pz-2 font-semibold text-xl -mb-1">
            Pneus para uso profissional
          </text>
          <text className="font-thin">Agricola, Industrial e OTR</text>
        </div>
      </div>

      <div className="flex items-center gap-2 w-feature-box">
        <CartIcon fill={"#004a1f"} w={"25"} h={"25"} />
        <div className="flex flex-col">
          <text className="text-green-pz-2 font-semibold text-xl -mb-1">
            Pneus para uso profissional
          </text>
          <text className="font-thin">Agricola, Industrial e OTR</text>
        </div>
      </div>
      <div className="flex items-center gap-2 w-feature-box">
        <CartIcon fill={"#004a1f"} w={"25"} h={"25"} />
        <div className="flex flex-col">
          <text className="text-green-pz-2 font-semibold text-xl -mb-1">
            Pneus para uso profissional
          </text>
          <text className="font-thin">Agricola, Industrial e OTR</text>
        </div>
      </div>
    </section>
  );
}
