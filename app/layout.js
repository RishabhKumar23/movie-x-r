import localFont from "next/font/local";
import "./globals.css";
import { Funnel_Display } from 'next/font/google';

export const metadata = {
  title: "MovieXGen",
  description: "Movie Recommendation web app",
};

const AppFont = Funnel_Display({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={AppFont.className}
        
      >
        {children}
      </body>
    </html>
  );
}
