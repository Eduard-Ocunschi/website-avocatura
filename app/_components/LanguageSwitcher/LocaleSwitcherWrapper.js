import { getLocale } from "next-intl/server";
import LocaleSwitcherClient from "./LocaleSwitcherClient";

export default async function LocaleSwitcherWrapper() {
  const locale = await getLocale();
  return <LocaleSwitcherClient locale={locale} />;
}
