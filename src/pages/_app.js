// 'use client'
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ChakraProvider>
  );
}
