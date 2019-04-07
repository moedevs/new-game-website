import * as React from "react";
import { Box, Card, Tag } from "bloomer";

export const GuildImage = ({ image }) =>
  <Card className="guild-image-card">
    <div className="guild-image-wrapper">
      <img alt="guild-image" src={image.url} className="guild-image"/>
    </div>
    <p className="tags-label">Tags</p>
    <span className="tags">
      {image.tags.map(t => <Tag>{t.name}</Tag>)}
    </span>
  </Card>;
