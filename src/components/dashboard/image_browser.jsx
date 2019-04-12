import * as React from "react";
import * as B from "bloomer";
import "./image.scss";
import "./image_browser.scss";
import "./dashboard.scss";
import "../../layouts/bulma.scss";
import "../../../static/fonts/whitney.woff";
import { ModalImage } from "./modal";
import { TagList } from "./tag_list";
import { Navbar } from "./navbar";
import { useSubscription } from "react-apollo-hooks";
import gql from "graphql-tag";
import { Waypoint } from "react-waypoint";
import { ImageScroller } from "./image_scroller";

const imageQuery = gql`
  subscription ($where: images_bool_exp, $limit: Int!, $offset: Int!) {
    images(
      limit: $limit,
      offset: $offset,
      order_by: { created_at: desc }
      where: $where
    ) {
      url
      file_name
      tags: image_tags {
        name
      }
      user {
        name
        avatar
      }
    }
  }
`;

export const ImageBrowser = () => {
  const IMAGES_PER_PAGE = 20;
  const PAGINATION_DELAY = 2000;
  const [scrollable, setScrollable] = React.useState(false);
  const [modal, setModal] = React.useState(null);
  const [variables, setVariables] = React.useState({
    where: {},
    limit: IMAGES_PER_PAGE,
    offset: 0
  });

  setTimeout(() => {
    if (!scrollable) {
      setScrollable(true);
    }
  }, PAGINATION_DELAY);

  const { loading, error, data } = useSubscription(imageQuery, { variables });
  const closeImage = () => setModal(false);
  const search = keyword => {
    setVariables({
      offset: 0,
      limit: IMAGES_PER_PAGE,
      where: {
        image_tags: {
          name: {
            _eq: keyword
          }
        }
      }
    });
  };

  const loadMore = () => {
    // setVariables({
    //   ...variables,
    //   limit: variables.limit + IMAGES_PER_PAGE,
    //   offset: variables.offset + IMAGES_PER_PAGE,
    // });
  };

  return (
    <div>
      <Navbar/>
      <div className="images-page">
        <ModalImage image={modal} close={closeImage}/>
        {/* <SearchBar/>*/}
        <div className="main-content">
          <div className="two-columns">
            <B.Columns isFullWidth>
              <B.Column className="sidebar is-one-fifth">
                <TagList search={search}/>
              </B.Column>
              <B.Column className="is-four-fifths" isFullWidth>
                <ImageScroller
                  data={data ? data.images : []}
                  loading={loading}
                  error={error}
                  setModal={setModal}
                />
              </B.Column>
            </B.Columns>
          </div>
        </div>
      </div>
      <div style={{ clear: "both" }}>
        {scrollable && <Waypoint onEnter={e => e.currentPosition === "inside" && scrollable && loadMore()}/>}
      </div>
    </div>
  );
};
