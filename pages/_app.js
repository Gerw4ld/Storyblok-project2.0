import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import MainInfoItem from "../src/components/MainInfoItem";
import MainInfo from "../src/components/MainInfo";
import Teaser from "../src/components/Teaser";
import Page from "../src/components/Page";
import HeroBanner from "../src/components/HeroBanner";
import ContactAndInfo from "../src/components/ContactAndInfo";
import Team from "../src/components/Team";
import TeamMember from "../src/components/TeamMember";

const components = {
  heroBanner: HeroBanner,
  mainInfo: MainInfo,
  mainInfoItem: MainInfoItem,
  contactAndInfo: ContactAndInfo,
  team: Team,
  teamMember: TeamMember,

  teaser: Teaser,
  page: Page,

};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components
});
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
