import * as React from "react";
import { Layout } from "../layouts/layout";
import { Aoba } from "../components/girls/aoba";
import { Hifumi } from "../components/girls/hifumi";
import { LandingPanel } from "../components/landing/landing_panel";
import { SiteFooter } from "../components/outro/footer";
import { tweets } from "../components/intro/twitter/tweets";
import { SiteIntro } from "../components/intro/intro";

export default ({}) => (
  <Layout>
    <LandingPanel />
    <SiteIntro />
    <Aoba />
    <Hifumi />
    <SiteFooter />
  </Layout>
);
