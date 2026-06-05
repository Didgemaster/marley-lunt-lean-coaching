import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marley Lunt Lean Coaching",
  description:
    "Lean coaching for individuals and teams. Build clarity, remove waste, and ship what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
