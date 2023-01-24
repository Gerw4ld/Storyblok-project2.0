import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import MainInfoItem from "../src/components/MainInfoItem";
import MainInfo from "../src/components/MainInfo";
import Teaser from "../src/components/Teaser";
import Page from "../src/components/Page";
import HeroBanner from "../src/components/HeroBanner";

const components = {
  mainInfoItem: MainInfoItem,
  mainInfo: MainInfo,
  teaser: Teaser,
  page: Page,
  heroBanner: HeroBanner,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components
});
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
