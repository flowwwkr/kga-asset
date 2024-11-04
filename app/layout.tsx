import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./font";

export const metadata: Metadata = {
  title: "KGA Asset",
  description: "KGA Asset",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
