import * as React from "react";
import * as B from "bloomer";

import "./menu.scss";
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
      <div style={{ width: "100%", background: "#5c5e63", height: 20, margin: 5 }}/>
      <div className="line" style={{ width: "80%", background: "#5c5e63", height: 20, margin: 5 }}/>
    </div>
  </div>;

export const TagListItem = ({ count, name, onClick, isActive }) =>
  <B.MenuLink className="tag-list-item" isActive={isActive} onClick={onClick}>
    <span className="has-text-danger tag-list-count">{count}</span>
    <p className="tag-list-item-name">{name}</p>
  </B.MenuLink>;

export const TagList = ({ search, total }) => {
  const [active, setActive] = React.useState(null);
  const { error, data, loading } = useSubscription(tagCounts);
  const { error: tagDataError, loading: tagDataLoading, data: tagData } = useSubscription(maxTags);

  if (error || tagDataError) {
    console.log(error || tagDataError);
    return null;
  }

  const sorted = data ? data.counts.sort(magicSort) : [];
  const unseen = tagDataLoading || loading ? 0 : tagData.tags.aggregate.max - sorted.length;

  const handleTagClick = (name) => (e) => {
    search(name);
    return setActive(name);
  };

  // if (loading) {
  // return (
  //   <TagLoading/>);
  // }
  return (
    <B.Menu className="side-menu">
      <B.Level className="menu-brand">
        <B.LevelLeft>
          <B.LevelItem>
            <B.Image className="is-marginless" isSize="32x32" src="https://i.love.miki.ai/hifumi_avatar.png"/>
          </B.LevelItem>
          <B.LevelItem className="side-menu-title">
            <h1>/r/NewGame Dashboard</h1>
          </B.LevelItem>
        </B.LevelLeft>
      </B.Level>
      {tagDataLoading
        ? <h2>Loading...</h2>
        :
        <>
      <B.MenuLabel>All Tags</B.MenuLabel>
      <B.MenuList>
        <li><TagListItem name={"All"} count={total} onClick={handleTagClick(null)} isActive={!active}/></li>
        {sorted.map(({ name, count }) =>
          <li>
            <TagListItem count={count} name={name} onClick={handleTagClick(name)} isActive={active === name}/>
          </li>
        )}
        {unseen > 0 && <p className="has-text-grey">{`and ${unseen} more tags...`}</p>}
      </B.MenuList>
      </>
      }
    </B.Menu>
  );
};

