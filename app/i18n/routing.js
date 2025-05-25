import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ro", "en"],

  // Used when no locale matches
  defaultLocale: "ro",
  pathnames: {
    "/despre": {
      ro: "/despre",
      en: "/about",
    },
    "/servicii": {
      ro: "/servicii",
      en: "/services",
    },
  },
});
