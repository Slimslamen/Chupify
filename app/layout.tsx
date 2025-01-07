
import "./globals.css";
import { NextAuthSessionProvider } from "./api/auth/NextAuthSessionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black pt-2 mb-12 mt-5 text-white`}
      >
        <NextAuthSessionProvider>
        {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
