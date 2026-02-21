import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./Components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Sreeja Interiors | Premium Interior Design & Decoration Studio",
  description: "Transforming spaces with exquisite interior design services for residential, commercial, and office environments. Offering end-to-end execution, modular solutions, and bespoke decor to create aesthetic and functional spaces. Your trusted partner for modern and luxury interior solutions.",
  keywords: "interior design, home decor, commercial interior, office interior, modular kitchen, wardrobe design, residential interior, luxury interior, modern interior, Sreeja Interiors",
  author: "Sreeja Interiors",
  openGraph: {
    title: "Sreeja Interiors | Premium Interior Design & Decoration Studio",
    description: "Transforming spaces with exquisite interior design services for residential, commercial, and office environments. Offering end-to-end execution, modular solutions, and bespoke decor to create aesthetic and functional spaces.",
    url: "https://sreejainteriors.com", // Assuming this is the website URL, please update if different
    siteName: "Sreeja Interiors",
    images: [
      {
        url: "https://sreejainteriors.com/og-image.jpg", // Placeholder image, please replace with actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Sreeja Interiors - Interior Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sreeja Interiors | Premium Interior Design & Decoration Studio",
    description: "Transforming spaces with exquisite interior design services for residential, commercial, and office environments. Offering end-to-end execution, modular solutions, and bespoke decor to create aesthetic and functional spaces.",
    creator: "@sreejainteriors", // Placeholder Twitter handle, please update
    images: ["https://sreejainteriors.com/twitter-image.jpg"], // Placeholder image, please replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <div className="min-h-screen w-full">
          <NavBar />
          <main className="section-shell pb-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
