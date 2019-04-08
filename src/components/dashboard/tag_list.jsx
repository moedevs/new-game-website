import * as React from "react";
import * as B from "bloomer";

import "./tag_list.scss";

export const TagList = ({ tags }) =>
  <B.Card className="taglist">
    <B.CardContent>
      {tags.map(t => <p>{t}</p>)}
    </B.CardContent>
  </B.Card>;
