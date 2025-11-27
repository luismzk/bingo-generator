import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2025 Bingo Generator",
  description: "Generate your custom bingo cards for 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-gray-900 text-white min-h-screen'>{children}</body>
    </html>
  );
}
