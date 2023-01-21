import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../src/components/Feature";
import Grid from "../src/components/Grid";
import Teaser from "../src/components/Teaser";
import Page from "../src/components/Page";
import HeroBanner from "../src/components/HeroBanner";

const components = {
  feature: Feature,
  grid: Grid,
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
