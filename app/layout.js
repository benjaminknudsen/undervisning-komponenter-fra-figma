import { Inter } from "next/font/google";
import "./globals.css";

// The font from the Figma file. Use another font from next/font/google if your design uses one.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata = {
  title: "Pill og modal",
  description: "A pill that opens a modal – from Figma to React/Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
