"use client";

import { useRef } from "react";
import SearchIcon from "../icons/search";

export default function HeaderDesktop() {
  const inputRef = useRef<HTMLInputElement>(null);

  function Pesquisar() {
    const termoDeBusca = inputRef?.current?.value;
    window.location.href = `/busca/${termoDeBusca}`;
  }

  return (
    <header className="w-full h-auto bg-white flex justify-center items-center flex-col gap-2 py-2">
      <div className="w-row h-auto flex justify-end gap-4 text-xs uppercase text-gray-700">
        <a href="#">
          <p>nossas lojas</p>
        </a>
        <a href="#">
          <p>quem somos</p>
        </a>
        <a href="#">
          <p>contato</p>
        </a>
        <a href="#">
          <p>blog</p>
        </a>
      </div>
      <div className="w-row border-black h-10 flex justify-between items-center mb-1">
        <a href="/">
          <img src="/pneuzao-logo.svg" className="h-12 cursor-pointer" />
        </a>
        <div className="w-auto border border-gray-300 pl-2 flex rounded-sm">
          <input
            ref={inputRef}
            type="text"
            placeholder="Pesquise por medida, modelo ou marca..."
            className="outline-none w-input-search"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                Pesquisar();
              }
            }}
          />
          <button
            onClick={() => Pesquisar()}
            className="w-20 bg-green-pz  h-11 rounded-r flex justify-center items-center"
          >
            <SearchIcon fill="white" />
          </button>
        </div>
        <button className="bg-green-pz px-5 h-11 text-white rounded-md font-medium flex items-center gap-3">
          <img src="/whatsapp.png" className="cursor-pointer h-6" />
          Fale com um especialista
        </button>
      </div>
    </header>
  );
}
