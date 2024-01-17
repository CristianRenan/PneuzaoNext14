export default function BuscaLayout({
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
