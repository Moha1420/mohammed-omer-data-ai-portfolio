import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Omer | Data & AI Portfolio",
  description: "Portfolio of Mohammed Omer — Data Analytics, Business Intelligence, Data Engineering, and Machine Learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}