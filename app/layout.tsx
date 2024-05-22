import "./globals.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en ">
      <body className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
            <ToastContainer />
      </body>
    </html>
  );
}
