import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import SessionWrapper from "../../component/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Nickk",
  description: "Web Based Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="body min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
