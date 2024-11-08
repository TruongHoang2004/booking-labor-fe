import type { Metadata } from "next";
import "../styles/globals.css";
import { Montserrat } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/nextuiProvider";

const layout_font = Montserrat({
  weight: ['400', '500', '700', '600', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "DreamLabour",
  description: "Tinh ban dieu ki",
  icons: {
    icon: '/img/favicon/favicon1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body className={`${layout_font.className} antialiased`}>
          <Provider>
            <Header/>
            {children}
            <Footer/>
          </Provider>
          
      </body>
    </html>
  );
}
