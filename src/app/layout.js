import "./globals.css";


export const metadata = {
  title: "Luis Hernandez | Portfolio",
  description: "Portfolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#0B0F14] text-white antialiased">

        {children}
      </body>
    </html>
  );
}