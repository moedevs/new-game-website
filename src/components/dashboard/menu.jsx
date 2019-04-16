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

export const TagListItem = ({ count, name, onClick, isActive, className, disabled, style = {} }) =>
  <B.MenuLink className="tag-list-item" isActive={isActive} onClick={onClick} disabled={disabled} style={style}>
    <div className="name-container">
      <B.Icon className={["channel-icon", className].join(" ")}/>
      <p className="tag-list-item-name">{name}</p>
    </div>
    {count && <span className="has-text-danger tag-list-count">{count}</span>}
  </B.MenuLink>;

const ServerTitle = ({ name }) =>
  <div className="server-title-container">
    <p className="server-title">
      {name}
    </p>
  </div>;

export const TagList = ({ search, total }) => {
  const [active, setActive] = React.useState(null);
  const [toTop, setToTop] = React.useState(false);
  const { error, data, loading } = useSubscription(tagCounts);
  const { error: tagDataError, loading: tagDataLoading, data: tagData } = useSubscription(maxTags);

  if (error || tagDataError) {
    console.log(error || tagDataError);
    return null;
  }

  const handleScroll = e => {
    setToTop(Boolean(window.scrollY));
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener(handleScroll);
  }, []);

  const sorted = data ? data.counts.sort(magicSort) : [];
  const unseen = tagDataLoading || loading ? 0 : tagData.tags.aggregate.max - sorted.length;

  const handleTagClick = (name) => (e) => {
    search(name);
    return setActive(name);
  };

  const toTopButton =
    <B.MenuList style={{ position: "fixed", width: "100%" }}>
      <li>
        <TagListItem
          style={{ alignSelf: "flex-end" }}
          name="To Top"
          className="fas fa-chevron-circle-up"
          onClick={() => window.scrollTo(0, 0)}
        />
      </li>
    </B.MenuList>;

  return (
    <B.Menu className="side-menu">
      <ServerTitle name="/r/NewGame"/>
      <B.MenuList>
        <li><TagListItem name="Starboard" className="fas fa-star" disabled/></li>
      </B.MenuList>
      <div className="tag-list">
        {tagDataLoading
          ? <h2>Loading...</h2>
          :
          <>
            <B.MenuLabel>Tags</B.MenuLabel>
            <B.MenuList>
              <li><TagListItem name={"All"} count={total} className="fas fa-tags" onClick={handleTagClick(null)}
                               isActive={!active}/></li>
              {sorted.map(({ name, count }) =>
                <li>
                  <TagListItem count={count} className="fas fa-tags" name={name} onClick={handleTagClick(name)}
                               isActive={active === name}/>
                </li>
              )}
              {unseen > 0 && <TagListItem className="has-text-grey fas fa-tags" name={`${unseen} more tags...`}/>}
            </B.MenuList>
          </>
        }
      </div>

      {toTop && toTopButton}
    </B.Menu>
  );
};

