import * as React from "react";
import * as B from "bloomer";

import "./tag_list.scss";

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

export const TagListItem = ({ count, name }) =>
  <span className="tag-list-item">
    <span className="has-text-danger tag-list-count">{count}</span>
    <p>{name}</p>
  </span>;

export const TagList = ({ tags }) => {
  const sorted = tags.sort(magicSort);
  return (
    <B.Box className="taglist">
      <B.Title>Tags</B.Title>
      <hr/>
      {sorted.map(({ name, count }) => <TagListItem count={count} name={name}/>)}
    </B.Box>
  );
};
