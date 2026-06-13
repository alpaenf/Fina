import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fina Julianti | Professional Portfolio",
  description: "Creative Digital Enthusiast & Future Professional. I craft digital experiences that blend aesthetic elegance with functional clarity.",
  keywords: ["Fina Julianti", "Portfolio", "UI/UX Design", "Content Creation", "Social Media Management", "Laravel"],
  authors: [{ name: "Fina Julianti" }],
  openGraph: {
    title: "Fina Julianti | Professional Portfolio",
    description: "Creative Digital Enthusiast & Future Professional. I craft digital experiences that blend aesthetic elegance with functional clarity.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
