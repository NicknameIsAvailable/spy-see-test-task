import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/shared/ui/styles/index.css";
import MainLayout from "@/components/layout/main-layout";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Spy&See",
  description: "Тестовое задание для Spy&See",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
