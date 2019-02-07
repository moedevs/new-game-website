import * as React from "react";
import { Columns, Column, Card, CardContent, CardHeader, CardHeaderTitle } from "bloomer";

export const Description = () =>
  <Columns isCentered>
    <Column isSize="1/2">
      <Card>
        <CardHeader>
          <CardHeaderTitle hasTextAlign="centered">
            <h1 className="title">Why should you watch new game?</h1>
          </CardHeaderTitle>
        </CardHeader>
        <CardContent >
          <ul>
            <li>S</li>
          </ul>
        </CardContent>
      </Card>
    </Column>
  </Columns>;
