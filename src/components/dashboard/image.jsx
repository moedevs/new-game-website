import * as React from "react";
import * as B from "bloomer";

export const GuildImage = ({ image, setFocus }) => {
  const tagContent =
    <div className="tags">
      {image.tags.map(t => <B.Tag isColor="">{t.name}</B.Tag>)}
    </div>;
  return (
    <B.Card className="guild-image-card">
      <B.CardImage className="guild-image-wrapper" onClick={() => setFocus({ image, open: true })}>
        {image.url.endsWith('.webm')
          ? <video height="200">
            <source src={`http://localhost:9224/200/${image.url}`} type="video/webm"/>
          </video>
          :<img alt="guild-image" src={`http://localhost:9224/200/${image.url}`} className="guild-image"/>}

      </B.CardImage>
      <B.CardContent className="image-content">
        <B.Level className="image-poster">
          <B.LevelLeft>
            <B.LevelItem>
              <figure className="image is-24x24">
                <img className="is-rounded is-24x24" src={`http://localhost:9224/200/${image.user.avatar}`}/>
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
