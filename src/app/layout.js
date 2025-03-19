import "./globals.css";

export const metadata = {
  title: "Barber Shop",
  description: "Haircuts and Shaves ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
