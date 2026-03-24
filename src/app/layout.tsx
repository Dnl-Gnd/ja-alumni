import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Alumni | Junior Achievement El Salvador",
  description:
    "Formas parte de una red de más de 1 millón de personas que están construyendo el país. Reconéctate con la comunidad Alumni de JA El Salvador.",
  openGraph: {
    title: "Red Alumni | Junior Achievement El Salvador",
    description: "Reconéctate con la red más poderosa de líderes jóvenes de El Salvador.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
