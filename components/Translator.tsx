import langs from "public/langs.json";

// This is a dummy component to replicate the functionality provided by react-intl, lingui etc.
export default function Translator(p: { tid: string; locale: string }) {
  return <>{langs[p.locale][p.tid]}</>;
}
