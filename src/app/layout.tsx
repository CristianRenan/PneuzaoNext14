import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderDesktop from "./components/layout/headerDesktop";
import MenuModelosDesktop from "./components/menuModelos/menuModelosDesktop";
import FooterDesktop from "./components/layout/footerDesktop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pneuzao Next14 Tailwind",
  description: "App para aprendizado do Next14 e Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-100 flex flex-col justify-center items-center">
        <HeaderDesktop />
        {children}
        <FooterDesktop />
      </body>
    </html>
  );
}
