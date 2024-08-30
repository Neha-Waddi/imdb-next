import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Searchbox from "@/components/Searchbox";
import AuthProvider from "@/components/AuthProvider";
import {Session} from 'next-auth'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB CLONE",
  description: "this is a movie database",
};

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <Header/>
        <Navbar/>
        <Searchbox/>

        <AuthProvider session={session}>
          {children}
        </AuthProvider>
        {children}</body>
    </html>
  );
}
