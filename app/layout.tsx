import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVELI",
  description:
    "A smarter, more personal marketplace for pre-loved fashion."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
