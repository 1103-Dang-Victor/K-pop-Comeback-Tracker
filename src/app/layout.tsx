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
      <body className="m-3">
        <header className="border-blue-500 border-4">
          <p>This is the header!</p>
          <p className="font-bold text-xl p-3">K-pop Comebacks Tracker</p>
        </header>
        
        {children}

        <footer className="border-blue-500 border-4">
          <p className="font-bold text-xl p-3">This is the footer!</p>
        </footer>
      </body>
    </html>
  );
}
