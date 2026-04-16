import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";
import { ProviderContext } from "@/Context/ProviderContext";
import { Bounce, ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "A full-featured friendship tracking app built with Next.js, featuring timeline logging, interaction analytics, and a fully responsive UI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
       
    >
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body className="min-h-full">
        <ProviderContext>
      <header className="sticky top-0  z-50 ">
        <NavBar/>
       </header>
       <main >
         {children}
       </main>
       <Footer/>
      </ProviderContext>  
  <ToastContainer
  position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
 
  
/>   
      </body>
    </html>
  );
}
