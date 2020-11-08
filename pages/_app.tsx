import Layout from "components/Layout";
import { AppPageProps } from "models/AppProps";
import { AppContextType, AppPropsType } from "next/dist/next-server/lib/utils";

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async (
  p: AppContextType
): Promise<{ pageProps: AppPageProps }> => {
  let pageProps = {};

  if (p.Component.getInitialProps) {
    pageProps = await p.Component.getInitialProps(p.ctx);
  }

  return {
    pageProps: {
      ...pageProps,
      locale: {
        current: p.router.locale,
        default: p.router.defaultLocale,
      },
    },
  };
};
