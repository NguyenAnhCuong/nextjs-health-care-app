import type { Metadata } from "next";
import "./globals.css";
import MuiThemeProvider from "@/components/providers/MuiThemeProvider";

export const metadata: Metadata = {
  title: "Vocabulary App",
  description: "Vocabulary learning app for building your word bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
