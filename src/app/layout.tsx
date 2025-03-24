import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kpop Comebacks Tracker",
  description: "A website to track when kpop comebacks are happening",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-auto text-xl md:text-lg bg-[#fffef7]">
        <header className="border-blue-500 border-4 w-fit">
          <p className="font-bold p-3 text-2xl text-left md:text-xl" >K-pop Comebacks Tracker</p>
        </header>
        
        {children}

        <footer className="border-blue-500 border-4">
          <p className="font-bold text-xl p-3">This is the footer!</p>
        </footer>
      </body>
    </html>
  );
}
