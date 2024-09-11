import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400','700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Sabine.bot - your first personal assistant",
  description: "Sabine.bot is your personal assistant and it does paperwork and scheduling for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
