import "@/app/_styles/globals.css";
import { Mulish } from "next/font/google";
import Navigation from "./_components/Navigation/Navigation";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Av. Madalina Ion",
    default: "Bun venit! | Av. Madalina Ion",
  },
  description: "Descrieret pentru SEO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
