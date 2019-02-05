import * as React from "react";
import { Layout } from "../layouts/layout";
import { Aoba } from "../components/girls/aoba";
import { Hifumi } from "../components/girls/hifumi";
import { LandingPanel } from "../components/landing/landing_panel";

export default ({}) =>
  <Layout>
    <LandingPanel/>
    <Aoba/>
    <Hifumi/>
  </Layout>;
