import Translator from "components/Translator";
import { AppPageProps } from "models/AppProps";

export default function Page(p: AppPageProps) {
  return (
    <>
      Index Page
      <br />
      <br />
      <Translator tid="hello" locale={p.locale.current} />
    </>
  );
}
