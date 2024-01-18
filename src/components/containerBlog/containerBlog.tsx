import CardBlog from "../cardBlog/cardBlog";

export default function ContainterBlog() {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-cente py-5">
      <div className="w-row  h-auto flex flex-col gap-5">
        <text className="font-medium text-lg">Últimos artigos publicados</text>
        <div className="w-full h-auto flex gap-4">
          <CardBlog key={"1"} />
          <CardBlog key={"1"} />
          <CardBlog key={"1"} />
          <CardBlog key={"1"} />
        </div>
      </div>
    </section>
  );
}
