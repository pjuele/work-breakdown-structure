import AppMenu from "@/components/AppMenu.cli";

export default function wbsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <AppMenu />
      </header>
      <section className="w-[100vw]">{children}</section>
    </>
  );
}
