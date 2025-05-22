import "@/app/_styles/globals.css";
import { Mulish } from "next/font/google";

import { Toaster } from "react-hot-toast";

import Navigation from "./_components/Navigation/Navigation";
import WhatsAppButtonDraggable from "./_components/WhatsAppButton/WhatsAppButtonDraggable";
import Footer from "./_components/Footer/Footer";

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
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://www.avocat-madalinaion.ro",
    site_name: "Av. Madalina Ion",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className={mulish.className}>
        <header>
          <Navigation />
        </header>
        <main aria-label="Main Content">
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                fontWeight: "700",
                maxWidth: "450px",
                width: "70vh",
                padding: "16px 24px",
                color: "var(--color-primary-strong)",
                backgroundColor: "var(--color-secondary-very-light)",
                border: "1px solid var(--color-primary-strong)",
                borderRadius: "0",
                textAlign: "center",
              },
            }}
          />
          <WhatsAppButtonDraggable />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
