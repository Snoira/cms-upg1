"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import Grid from "@/components/nestable/Grid";
import Footer from "@/components/nestable/Footer";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "hero": Hero,
  "grid": Grid,
  "footer": Footer,
} //HÄR LÄGGS ALLA COMPONENTS TILL, kom ihåg att importera dem ovanför!

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}