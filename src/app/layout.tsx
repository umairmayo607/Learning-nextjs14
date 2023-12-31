import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <li className="p-5 flex space-x-5 bg-orange-300">
          <ol> About</ol>
          <ol>login</ol>
          <ol>Merry</ol>
          <ol>Ummii</ol>
          <ol>ConditionalRendring</ol>
          <ol>UseEffect</ol>
        </li>

        {children}
      </body>
    </html>
  );
}
