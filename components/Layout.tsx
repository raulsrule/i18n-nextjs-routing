import { AppPageProps } from "models/AppProps";
import router from "next/router";
import langs from "public/langs.json";

const locales = Object.keys(langs);

export default function Layout(
  p: { children: React.ReactNode } & AppPageProps
) {
  function changeLocale(locale: string) {
    const query = (router.query || {}) as any;
    const url = router.pathname;
    let as = url;
    Object.keys(query).forEach((key) => {
      as = as.replace(`[${key}]`, query[key]);
    });
    router.push(url, as, { locale });
  }

  return (
    <>
      <select
        style={{ float: "right" }}
        value={p.locale.current}
        onChange={({ target: { value } }) => changeLocale(value)}
      >
        {locales.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>
      {p.children}
    </>
  );
}
