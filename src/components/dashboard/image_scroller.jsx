import * as React from "react";
import { GuildImage } from "./image";
import InfiniteScroll from "react-infinite-scroller";
import StackGrid from "react-stack-grid";
import "./image_scroller.scss";
import { AobaLoader } from "./loader";

export const ImageScroller = ({ data, loading, error, setModal, loadMore, hasMore }) => {
  const ref = React.createRef();

  if (error) {
    console.log(error);
    return <div>Uhhhh, something went wrong</div>;
  }
  return (
    <div className="image-grid">
      <InfiniteScroll
        loadMore={loadMore}
        initialLoad={false}
        hasMore={hasMore}
        getScrollParent={() => ref}
      >
      <StackGrid
        gutterWidth={10}
        columnWidth={200}
        ref={ref}
        duration={0}
        gutterHeight={10}
      >
        {data.map((d, i) =>
          <GuildImage
            image={d}
            key={i}
            setFocus={setModal}
          />)}
        {loading && <AobaLoader/>}
      </StackGrid>
      </InfiniteScroll>
    </div>
  );
};
