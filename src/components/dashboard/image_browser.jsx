import * as React from "react";
import * as B from "bloomer";

import "./image.scss";
import "./image_browser.scss";
import "./dashboard.scss";
import "../../layouts/bulma.scss";
import "../../../static/fonts/whitney.woff";

import StackGrid from "react-stack-grid";

import { ModalImage } from "./modal";
import { GuildImage } from "./image";
import { TagList } from "./tag_list";
import { Navbar } from "./navbar";
import { Paginator } from "./paginate";
import { useEffect } from "react";

export const DashboardTitle = () =>
  <B.Columns className="dashboard-title-area">
  </B.Columns>;

export const ImageBrowser = ({ images }) => {
  const PAGINATION_DELAY = 2000;
  const [filter, setFilter] = React.useState(null);
  const [image, setImage] = React.useState({ open: false });
  const [paginationOpen, setPagination] = React.useState(false);
  const closeImage = () => setImage({ open: false });
  useEffect(() => {
    setTimeout(() => setPagination(true), PAGINATION_DELAY);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="images-page">
        <ModalImage image={image} close={closeImage}/>
        {/* <SearchBar/>*/}
        <div className="main-content">
          <div className="two-columns">
            <B.Columns isFullWidth>
              <B.Column className="sidebar is-one-fifth">
                <TagList/>
              </B.Column>
              <B.Column className="is-four-fifths" isFullWidth>
                <StackGrid
                  columnWidth={200}
                  gutterWidth={10}
                  gutterHeight={10}
                  monitorImagesLoaded
                >
                  {images.map((d, i) => <GuildImage image={d} key={i} setFocus={setImage}/>)}
                </StackGrid>
                {paginationOpen && <Paginator/>}
              </B.Column>
            </B.Columns>
          </div>
        </div>
      </div>
    </div>
  );
};
