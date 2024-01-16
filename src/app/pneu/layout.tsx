import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pneu",
  description: "App para aprendizado do Next14 e Tailwind",
};

export default function PneuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white flex flex-col justify-center items-center w-full">
      {children}
    </section>
  );
}
