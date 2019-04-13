import * as React from "react";
import * as B from "bloomer";
import { thumbnailProxy } from "../../utils";

export const GuildImage = ({ image, setFocus }) => {
  const tagContent =
    <div className="tags">
      {image.tags.map((t, i) => <B.Tag key={i}>{t.name}</B.Tag>)}
    </div>;

  const setDefaultImg = (url) => (e) => {
    e.target.onerror = null;
    e.target.src = url;
  };

  return (
    <B.Card className="guild-image-card">
      <div className="image-wrapper">
        {image.tags.length > 0 &&
        <div className="black-panel">
          {tagContent}
        </div>}
        <B.CardImage className="guild-image-wrapper" onClick={() => setFocus({ image, open: true })}>
          <img
            alt="guild-image"
            src={`${thumbnailProxy}/${image.url}`}
            onError={setDefaultImg(image.url)}
            className="guild-image"
          />
        </B.CardImage>
      </div>
      <B.CardContent className="image-content">
        <B.Level className="image-poster">
          <B.LevelLeft className="image-poster-left">
            <B.LevelItem className="marginless">
              <figure className="image is-24x24">
                <img className="is-rounded is-24x24" src={`${thumbnailProxy}/${image.user.avatar}`}/>
              </figure>
            </B.LevelItem>
            <B.LevelItem className="image-poster-text-wrapper">
              <p className="image-poster-name has-text-white">
                {image.user.name}
              </p>
            </B.LevelItem>
          </B.LevelLeft>
          {image.tags.length > 0  &&
          <B.Level>
            <B.LevelLeft>
              <B.LevelItem>
                <p className="tag-label"><b className="tag-label-count">{image.tags.length}</b> Tags</p>
              </B.LevelItem>
            </B.LevelLeft>
          </B.Level>}
        </B.Level>
      </B.CardContent>
    </B.Card>
  );
};
