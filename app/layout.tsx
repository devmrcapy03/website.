import type { Metadata } from "next"; 
import { Instrument_Sans } from 'next/font/google';
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "mrcapy03 website.",
  description: "Student, programmer, and UI/UX designer based in Spain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} antialiased`}>{children}</body>
    </html>
  );
}
