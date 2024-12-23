import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
