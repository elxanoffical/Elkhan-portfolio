import "./globals.css";

export const metadata = {
  title: "Elkhan's Portfolio",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
