import Translator from "components/Translator";
import { AppPageProps } from "models/AppProps";
import { NextPageContext } from "next";
import Link from "next/link";
import langs from "public/langs.json";
const locales = Object.keys(langs);

export default function Page(p: AppPageProps & { name: string; age: string }) {
  const randomLocale = (function () {
    const notCurrentLocale = locales.filter((f) => f !== p.locale.current);
    const rdmIdx = Math.floor(Math.random() * notCurrentLocale.length);
    return notCurrentLocale[rdmIdx];
  })();

  return (
    <>
      Page [name]/[age]/index.tsx <br />[ {`${p.name} / ${p.age}`}]
      <br />
      <br />
      <Translator tid="hello" locale={p.locale.current} />
      <br />
      <br />
      <Link href="/" locale={randomLocale}>
        <a>
          Go to Index Page with locale as ' {randomLocale} '
          <br />
          (randomly picked locale to emulate changing locale on demand)
        </a>
      </Link>
    </>
  );
}

Page.getInitialProps = (p: NextPageContext) => {
  return p.query;
};
