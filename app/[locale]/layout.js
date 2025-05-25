import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/app/i18n/routing";

import "@/app/_styles/globals.css";
import { Mulish } from "next/font/google";

import { Toaster } from "react-hot-toast";
import Navigation from "../_components/Navigation/Navigation";
import WhatsAppButtonDraggable from "../_components/WhatsAppButton/WhatsAppButtonDraggable";
import Footer from "../_components/Footer/Footer";
// import CookieBanner from "../_components/CookieBanner/CookieBanner";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const baseUrl = "https://website-avocatura.vercel.app"; //SCHIMBA CAND MERGI LIVE

  return {
    title: {
      template: "%s | Av. Madalina Ion",
      default: "Bun venit! | Av. Madalina Ion",
    },
    description: "Descriere pentru SEO",
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, `${baseUrl}/${loc}`])
      ),
    },
    openGraph: {
      type: "website",
      locale: `${locale}_RO`,
      url: `${baseUrl}/${locale}`,
      site_name: "Av. Madalina Ion",
      alternateLocale: ["ro_RO", "en_RO"],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={mulish.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header>
            <Navigation />
          </header>
          <main aria-label="Main Content">
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: { duration: 3000 },
                error: { duration: 5000 },
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
        </NextIntlClientProvider>
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
