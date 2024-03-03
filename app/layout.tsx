import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { cn } from "@/lib/utils";
import { firaSans } from "./fonts/font";

export const metadata: Metadata = {
  title: "ampm",
  description: "On tour with Diamond Contruct",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(firaSans.className, 'no-scrollbar bg-black')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
