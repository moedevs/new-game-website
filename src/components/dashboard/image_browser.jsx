import * as React from "react";
import * as B from "bloomer";

import "./image.scss";
import "./dashboard.scss";
import "../../layouts/bulma.scss";
import "../../../static/fonts/whitney.woff";

import StackGrid from "react-stack-grid";

import { SearchBar } from "./searchbar";
import { ModalImage } from "./modal";
import { GuildImage } from "./image";
import { TagList } from "./tag_list";

export const DashboardTitle = () =>
  <B.Columns className="dashboard-title-area">
    <B.Column isSize="1/4">
      <B.Title className="has-text-white dashboard-title" isSize={4}>/r/NewGame Dashboard</B.Title>
    </B.Column>
    <B.Column isSize="2/4">
      <SearchBar className="search-wrapper"/>
    </B.Column>
    <B.Column isSize="1/4">
      <B.Level isPulled="right" isMobile>
        <B.LevelItem>
          {/* Bot status */}
          <B.Image isSize="24x24" src="https://cdn.discordapp.com/emojis/313956277808005120.png?v=1"/>
        </B.LevelItem>
        <B.LevelItem>
          <B.Subtitle className="has-text-white">Hifumi</B.Subtitle>
        </B.LevelItem>
      </B.Level>
    </B.Column>
  </B.Columns>;

export const ImageBrowser = ({ images }) => {
  const [image, setImage] = React.useState({ open: false });
  console.log(images);
  const tags = images.map(d => d.tags.map(t => t.name)).reduce((a, b) => a.concat(b), []);

  const closeImage = () => setImage({ open: false });

  return (
    <div className="images-page">
      <ModalImage image={image} close={closeImage}/>
      <DashboardTitle/>
      <div className="main-content">
        <B.Columns isFullWidth>
          <B.Column className="is-four-fifths" isFullWidth>
             <StackGrid columnWidth={200} gutterWidth={10} gutterHeight={10} monitorImagesLoaded>
               {images.map((d, i) => <GuildImage image={d} key={i} setFocus={setImage}/>)}
             </StackGrid>
          </B.Column>
          <B.Column className="sidebar is-one-fifth">
            <TagList tags={tags}/>
          </B.Column>
        </B.Columns>
      </div>
    </div>
  );
};
