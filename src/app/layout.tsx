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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
