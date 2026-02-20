import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./Components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Sreeja Interiors | Interior Design Studio",
  description:
    "Interior design studio for residential and commercial spaces with end-to-end execution.",
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
