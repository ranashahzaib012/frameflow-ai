import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FrameFlow AI",
  description: "AI-driven storytelling and storyboard workspace",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
