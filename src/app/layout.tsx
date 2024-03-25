import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../css/style.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davidson Souza- Designer para Lançamentos",
  description: "Designer e webdesigner para infoprodutos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
