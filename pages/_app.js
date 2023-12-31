import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Head from "next/head";

import store from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Shoe Store | Hridhya Paul</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Urbanist:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Provider store={store}>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    </>
  );
}
