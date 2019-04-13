import * as React from "react";
import { GuildImage } from "./image";
import aobaLoader from "../../loaders/aobaload.gif";
import InfiniteScroll from "react-infinite-scroller";
import StackGrid from "react-stack-grid"

import "./image_scroller.scss"
export const ImageScroller = ({ data, loading, error, setModal, loadMore, hasMore }) => {
  if (error) {
    console.log(error);
    return <div>Oops...</div>;
  }
  return (
    <div>
      <InfiniteScroll
        loadMore={loadMore}
        initialLoad={false}
        hasMore={hasMore}
      >
        <StackGrid
          gutterWidth={10}
          columnWidth={200}
          gutterHeight={10}
          monitorImagesLoaded
        >
        {data.map((d, i) =>
          <GuildImage
            image={d}
            key={i}
            setFocus={setModal}
          />)}
        {loading && <img src={aobaLoader}/>}
        </StackGrid>
      </InfiniteScroll>
    </div>
  );
};
