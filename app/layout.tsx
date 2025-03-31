import type { Metadata } from "next";
import "./globals.css";
// import { centuryGothic } from "@/fonts";

export const metadata: Metadata = {
  title: "Zort - AI powered bet tracker",
  description: "Artificial Intelligent bet tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-century">
        {children}
      </body>
    </html>
  );
}
