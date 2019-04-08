import * as React from "react";
import * as B from "bloomer";

import "./image.scss";
import "./dashboard.scss";
import "../../layouts/bulma.scss";
import "../../../static/fonts/whitney.woff";

import StackGrid from "react-stack-grid";

import { ModalImage } from "./modal";
import { GuildImage } from "./image";
import { TagList } from "./tag_list";
import { Navbar } from "./navbar";
import { useSubscription } from "react-apollo-hooks";
import gql from "graphql-tag";
import { SearchBar } from "./searchbar";

const tagCounts = gql`
  subscription  {
    counts: tag_count {
      name
      count
    }
  }
`;

export const DashboardTitle = () =>
  <B.Columns className="dashboard-title-area">
  </B.Columns>;

export const ImageBrowser = ({ images }) => {
  const { error, data, loading } = useSubscription(tagCounts);
  const [image, setImage] = React.useState({ open: false });
  console.log(images);
  console.log(data);
  console.log(error);
  const tags = images.map(d => d.tags.map(t => t.name)).reduce((a, b) => a.concat(b), []);

  const closeImage = () => setImage({ open: false });

  return (
    <div>
      <Navbar/>
      <div className="images-page">
        <ModalImage image={image} close={closeImage}/>
        {/* <SearchBar/>*/}
        <div className="main-content">
          <B.Columns isFullWidth>
            <B.Column className="sidebar is-one-fifth">
              {!data ? <div>Loading...</div> : <TagList tags={data.counts}/>}
            </B.Column>
            <B.Column className="is-four-fifths" isFullWidth>
              <StackGrid columnWidth={200} gutterWidth={10} gutterHeight={10} monitorImagesLoaded>
                {images.map((d, i) => <GuildImage image={d} key={i} setFocus={setImage}/>)}
              </StackGrid>
            </B.Column>
          </B.Columns>
        </div>
      </div>
    </div>
  );
};
