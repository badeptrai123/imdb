import { Inter } from "next/font/google";

import "./globals.css";
import { Providers } from "./Providers";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is IMDB clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Header />
            <Navbar />
            <SearchBox />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
