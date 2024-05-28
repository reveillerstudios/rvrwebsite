'use client'

import React, {useContext} from 'react'

import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'
import { LoadingProvider } from '@/Context/context/LoadingContext';
import { CanvasProvider } from '@/Context/context/CanvasContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <LoadingProvider>
      <CanvasProvider>
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-800 flex flex-col">
        <Navigation/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
      </CanvasProvider>
    </LoadingProvider>
  );
}
