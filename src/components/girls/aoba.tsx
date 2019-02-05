import { Girl } from "./girls";
import aoba from "./assets/aoba-base.png";
import thumbnail from "./assets/aoba-thumbnail.png";
import * as React from "react";

export const Aoba = () =>
  <Girl
    image={aoba}
    title={{
      quote: "yes",
      name: "Aoba",
      image: thumbnail
    }}
    strengths={[
      "Is adorable",
      "Is a legal loli",
      "Can do the art thing",
      "Has occasional sadism",
    ]}
    weaknesses={[
      "Has occasional sadism towards Hifumi",
      "Has a hard time nagivating bathrooms"
    ]}
    color="#a1a5ff"
  >yet</Girl>;
