import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Felipe Guarin P",
  description: "Portafolio creado por Luis Felipe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex-grow p-6 sm:overflow-y-aut md:p-12`}>{children}</body>
    </html>
  );
}
