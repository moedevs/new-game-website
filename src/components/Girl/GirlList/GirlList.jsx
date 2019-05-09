import * as React from "react";
import { CardContent, CardHeader } from "bloomer";
import { HeaderTitle, ListItem, ListContainer } from "./styled";

const GirlList = ({ name, items }) => (
  <div className="card is-size-6-mobile is-size-6-tablet is-size-5-desktop">
    <CardHeader className="is-size-6-mobile">
      <HeaderTitle>{name}</HeaderTitle>
    </CardHeader>
    <CardContent>
      <ListContainer>
        {items.map(item => <ListItem key={item}>{item}</ListItem>)}
      </ListContainer>
    </CardContent>
  </div>
);

export default GirlList;
