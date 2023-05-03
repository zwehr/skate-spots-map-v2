import { SessionProvider } from "next-auth/react";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
