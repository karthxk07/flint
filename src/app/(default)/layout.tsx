import { AuthContextProvider } from "@/src/contexts/AuthContext";
import "./index.css";
import "../global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "flint.",
  description: "A chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-[SF Mono]">
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
