import * as React from "react";
import { Column, Section, Subtitle, Tag, Title } from "bloomer";
import { GuildImage } from "./image";

import "./image.scss";
import { SearchBar } from "./searchbar";

export const ImageBrowser = ({ images }) => {
  console.log(images);
  const tags = (images.map(d => d.tags.map(t => t.name)).reduce((a, b) => a.concat(b), []));
  return (
    <div className="images-page">
      <Title className="has-text-white dashboard-title" isSize={1}>/r/NewGame Dashboard</Title>
      <SearchBar/>
      <div className="main-content">
        <Column className="sidebar card">
          {tags.map(t => <p className="has-text-grey">{t}</p>)}
        </Column>
        <Column className="guild-images">
          {images.map((d, i) => <GuildImage image={d} key={i}/>)}
        </Column>
      </div>
    </div>
  );
};
