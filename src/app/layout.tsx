import type { Metadata } from "next";
import { Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import AppMenu from "@/components/AppMenu.cli";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Work Buster",
  description: "Easy WBS tool for your agile projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <AppMenu />
        {children}
      </body>
    </html>
  );
}
