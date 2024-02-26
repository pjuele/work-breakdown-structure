import type { Metadata } from "next";
import { Noto_Sans as FontSans } from "next/font/google";
import { Victor_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "workbuster",
  description: "Easy WBS tool for your agile projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "lg:container",
          "mx-auto min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}

        <div className="fixed top-3 left-3 rounded-lg bg-destructive p-3 text-md font-extrabold">
          <span className="inline sm:hidden">XS</span>
          <span className="hidden sm:inline md:hidden">SM</span>
          <span className="hidden md:inline lg:hidden">MD</span>
          <span className="hidden lg:inline xl:hidden">LG</span>
          <span className="hidden xl:inline 2xl:hidden">XL</span>
          <span className="hidden 2xl:inline">2XL</span>
        </div>
      </body>
    </html>
  );
}
