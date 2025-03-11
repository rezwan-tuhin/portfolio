import { Geist, Geist_Mono, Ovo, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const ovo = Ovo({
  weight: '400', 
  subsets: ["latin"],
});
export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ovo.className} ${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
