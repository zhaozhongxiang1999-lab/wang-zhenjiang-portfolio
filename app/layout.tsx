import type { Metadata } from "next";
import AmbientPlayer from "./AmbientPlayer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wang-zhenjiang-portfolio.tart-ant-4851.chatgpt.site"),
  title: "王振江｜品牌设计师作品集",
  description: "王振江品牌设计作品集，涵盖品牌视觉、品牌全案、字体 Logo、海报、IP 与动态设计。",
  openGraph: {
    title: "王振江｜品牌设计作品集",
    description: "从视觉识别到完整品牌体验。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "王振江品牌设计作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "王振江｜品牌设计作品集",
    description: "从视觉识别到完整品牌体验。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}<AmbientPlayer /></body></html>;
}
