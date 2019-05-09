import * as React from "react";
import { Card, CardContent } from "bloomer";
import { GirlHeader } from "./styled";

const GirlContent = ({ children, color, role }) => (
  <Card>
    <GirlHeader style={{ backgroundColor: color }}>
      <h1>{role}</h1>
    </GirlHeader>
    <CardContent className="girl-content is-size-5-mobile is-size-5-tablet content">
      {children}
    </CardContent>
  </Card>
);

export default GirlContent;
