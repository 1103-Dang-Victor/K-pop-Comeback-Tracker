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
      <body>
        <header>
            <b><p>K-pop Comebacks Tracker</p></b>
        </header>
        
        {children}

        <footer>
          <p>Footer information.</p>
        </footer>
      </body>
    </html>
  );
}
