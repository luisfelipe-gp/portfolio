import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftColumn from "../../components/LeftColumn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi portafolio",
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
