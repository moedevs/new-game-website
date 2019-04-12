import * as React from "react";
import * as B from "bloomer";

import "./tag_list.scss";
import { useSubscription } from "react-apollo-hooks";
import gql from "graphql-tag";

var yeet = "dab";
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

export const TagListItem = ({ count, name, onClick }) =>
  <span className="tag-list-item" onClick={onClick}>
    <span className="has-text-danger tag-list-count">{count}</span>
    <p className="tag-list-item-name">{name}</p>
  </span>;

export const TagList = ({ search }) => {
  const { error, data, loading } = useSubscription(tagCounts);
  const { error: tagDataError, loading: tagDataLoading, data: tagData } = useSubscription(maxTags);

  if (loading || tagDataLoading) {
    return null;
  }
  if (error || tagDataError) {
    console.log(error || tagDataError);
    return null;
  }

  const tags = data.counts;
  const sorted = tags.sort(magicSort);
  console.log(tagData);
  const unseen = tagData.tags.aggregate.max - tags.length;
  return (
    <B.Box className="taglist">
      <B.Title>Tags</B.Title>
      <hr/>
      {sorted.map(({ name, count }) => <TagListItem count={count} name={name} onClick={() => search(name)}/>)}
      {unseen > 0 && <p className="has-text-grey">{`and ${unseen} more tags...`}</p>}
    </B.Box>
  );
};

