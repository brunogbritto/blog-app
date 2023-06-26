import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogueria",
  description: "Um blog como qualquer outro.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
