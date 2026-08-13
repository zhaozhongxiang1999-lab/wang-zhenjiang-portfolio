import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "王振江｜品牌设计师作品集",
  description: "王振江品牌设计作品集，涵盖品牌视觉、品牌全案、字体 Logo、海报与 IP 全案设计。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
