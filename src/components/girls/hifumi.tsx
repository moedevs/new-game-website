import { Girl } from "./girls";
import hifumi from "./assets/hifumi-base.png";
import thumbnail from "./assets/hifumi-thumbnail.png";
import * as React from "react";

export const Hifumi = () => (
  <Girl
    image={hifumi}
    title={{
      quote: '"Do you like it when I smile, Sojiro?"',
      name: "Hifumi",
      image: thumbnail
    }}
    strengths={["Literally everything", "Sometimes shy"]}
    weaknesses={["Sometimes shy"]}
    color="#ffb8df"
  >
    yet
  </Girl>
);
