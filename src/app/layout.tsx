import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
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
    <html lang="en" suppressHydrationWarning>
      <head>
      <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js"></script>
      </head>
      <body className="m-auto text-xl md:text-lg bg-primary text-tBase duration-250 mt-3 overflow-y-auto">
        <header className="w-fit">
          <p className="font-bold p-3 text-2xl text-left md:text-xl text-tBase">K-pop Comebacks Tracker</p>
        </header>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
