import * as React from "react";
import * as B from "bloomer";
import "./image.scss";
import "./image_browser.scss";
import "./dashboard.scss";
import "../../layouts/bulma.scss";
import "../../../static/fonts/whitney.woff";
import "react-toastify/dist/ReactToastify.css";
import { ModalImage } from "./modal";
import { TagList } from "./menu";
import { Navbar } from "./navbar";
import { useSubscription } from "react-apollo-hooks";
import gql from "graphql-tag";
import { ImageScroller } from "./image_scroller";
import { ServerList } from "./server_list";

const imageQuery = gql`
  subscription ($where: images_bool_exp, $limit: Int!) {
    images(
      limit: $limit,
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

const aggregateQuery = gql`
  subscription {
    images: images_aggregate {
      aggregate {
        count
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
    limit: IMAGES_PER_PAGE
  });
  const { error: imageError, data: imageCount } = useSubscription(aggregateQuery);

  setTimeout(() => {
    if (!scrollable) {
      setScrollable(true);
    }
  }, PAGINATION_DELAY);

  const [cachedImages, setCache] = React.useState([]);
  const { loading, error, data } = useSubscription(imageQuery, {
    variables,
    onSubscriptionData: ({ subscriptionData }) =>
      setCache(subscriptionData.data.images)
  });
  const closeImage = () => setModal(false);
  const search = keyword => {
    setCache([]);
    if (!keyword) {
      return setVariables({
        ...variables,
        where: {},
        limit: IMAGES_PER_PAGE
      });
    }
    setVariables({
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
    if (loading) {
      return;
    }
    setVariables({
      ...variables,
      limit: variables.limit + IMAGES_PER_PAGE
    });
  };
  return (
    <div>
      {/* <Navbar/>*/}
      <div className="images-page">
        <ModalImage image={modal} close={closeImage}/>
        {/* <SearchBar/>*/}
        <div className="main-content">
          <div className="two-columns">
            <ServerList/>
            <div className="sidebar left-side">
              <TagList search={search} total={imageCount ? imageCount.images.aggregate.count : 0}/>
            </div>
            <div className="right-side">
              <Navbar/>
              <ImageScroller
                loadMore={loadMore}
                hasMore={imageCount ? cachedImages.length < imageCount.images.aggregate.count : false}
                data={loading ? cachedImages : data.images}
                loading={loading}
                error={error}
                setModal={setModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
