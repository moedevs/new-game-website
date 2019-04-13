import * as React from "react";
import * as B from "bloomer";

import "./tag_list.scss";
import { useSubscription } from "react-apollo-hooks";
import gql from "graphql-tag";

const tagCounts = gql`
  subscription  {
    counts: tag_count(limit: 20 order_by: { count: desc }) {
      name
      count
    }
  }
`;

const maxTags = gql`
  subscription {
    tags: image_tags_aggregate(distinct_on: name) {
      aggregate {
        max: count
      }
    }
  }
`;

/**
 * Cout sort + alphabetical for matching things
 * @param a
 * @param b
 * @return {number}
 */
const magicSort = (a, b) => {
  const up = 1;
  const down = -1;
  if (a.count < b.count) {
    return up;
  } else if (a.count > b.count) {
    return down;
  }
  return a.name < b.name ? down : up;
};

const TagLoading = () =>
  <div style={{
    padding: 5,
    borderRadius: 5,
    background: "rgb(159, 173, 189)",
    height: 300
  }}>
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", background:  "#5c5e63", height: 20, margin: 5 }}/>
      <div className="line" style={{ width: "80%", background:  "#5c5e63", height: 20, margin: 5 }}/>
    </div>
  </div>;

export const TagListItem = ({ count, name, onClick }) =>
  <span className="tag-list-item" >
    <span className="has-text-danger tag-list-count">{count}</span>
    <p className="tag-list-item-name" onClick={onClick}>{name}</p>
  </span>;

export const TagList = ({ search, total }) => {
  const { error, data, loading } = useSubscription(tagCounts);
  const { error: tagDataError, loading: tagDataLoading, data: tagData } = useSubscription(maxTags);

  if (error || tagDataError) {
    console.log(error || tagDataError);
    return null;
  }

  const sorted = data ? data.counts.sort(magicSort) : [];
  const unseen = tagDataLoading || loading ? 0 : tagData.tags.aggregate.max - sorted.length;

  // if (loading) {
  // return (
  //   <TagLoading/>);
  // }
  return (
    <B.Box className="taglist">
      <B.Title>Tags</B.Title>
      <hr/>
      <TagListItem name={"All"} count={total} onClick={() => search(null)}/>
      <br/>
      {sorted.map(({ name, count }) => <TagListItem count={count} name={name} onClick={() => search(name)}/>)}
      {unseen > 0 && <p className="has-text-grey">{`and ${unseen} more tags...`}</p>}
    </B.Box>
  );
};

