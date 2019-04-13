import * as React from "react";
import * as B from "bloomer";
import { thumbnailProxy } from "../../utils";

export const GuildImage = ({ image, setFocus }) => {
  const tagContent =
    <div className="tags">
      {image.tags.map(t => <B.Tag isColor="">{t.name}</B.Tag>)}
    </div>;

  const setDefaultImg = (url) => (e) => {
    e.target.onerror = null;
    e.target.src = url;
  };

  return (
    <B.Card className="guild-image-card">
      <B.CardImage className="guild-image-wrapper" onClick={() => setFocus({ image, open: true })}>
        <img
          alt="guild-image"
          src={`${thumbnailProxy}/${image.url}`}
          onError={setDefaultImg(image.url)}
          className="guild-image"
        />
      </B.CardImage>
      <B.CardContent className="image-content">
        <B.Level className="image-poster">
          <B.LevelLeft>
            <B.LevelItem>
              <figure className="image is-24x24">
                <img className="is-rounded is-24x24" src={`${thumbnailProxy}/${image.user.avatar}`}/>
              </figure>
            </B.LevelItem>
            <B.LevelItem>
              <p className="image-poster-name has-text-white">
                @{image.user.name}
              </p>
            </B.LevelItem>
          </B.LevelLeft>
        </B.Level>
        {image.tags.length > 0 && tagContent}
      </B.CardContent>
    </B.Card>
  );
};
