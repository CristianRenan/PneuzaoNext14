"use client";

export default function CustomError() {
  return (
    <div className="w-full h-auto flex justify-center py-5">
      <div className="gap-4 w-row h-80 border border-gray-300 rounded-lg bg-white flex p-4 flex flex-col">
        <p className="text-8xl ">Ops!!</p>
        <p className="text-xl w-96">
          Infelizmente não conseguimos processar a informação solicitada, por
          favor tente novamente mais tarde
        </p>
      </div>
    </div>
  );
}
