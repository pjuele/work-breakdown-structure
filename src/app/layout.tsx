import type { Metadata } from "next";
import { Noto_Sans as FontSans } from "next/font/google";
import { Victor_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import DebugBreakpoints from "@/components/DebugBreakpoints.cli";

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
          // "lg:container",
          "mx-auto min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        {children}

          <DebugBreakpoints/>
      </body>
    </html>
  );
}
