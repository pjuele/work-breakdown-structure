import AppMenu from "@/components/boilerplate/AppMenu.cli";

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
      <main className="w-full">{children}</main>
    </>
  );
}
