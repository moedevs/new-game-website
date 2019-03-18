import * as React from "react";
import { Box, Content, Icon, Level, LevelItem, LevelLeft, Subtitle, Title } from "bloomer";

import "./checklist.scss";

const textClass = "is-size-4-desktop is-size-6-tablet checklist-text";

const Item = ({ checked, children }) =>
  <span style={{ display: "flex", alignItems: "center" }}>
        {checked
          ? <Icon className="fas fa-check has-text-primary" style={{ marginRight: "10px" }}/>
          : <Icon className="fas fa-times has-text-danger" style={{ marginRight: "10px" }}/>}
    {children}
      </span>;

const Text = ({ children }) => <p className={textClass}>{children}</p>;

export const Checklist = () =>
  <div>
    <Title className="has-text-grey-dark">Why New Game! is absolutely the best anime</Title>
    <Content className="checklist">
      <Item checked>
        <Text>Has the best girls</Text>
      </Item>
      <Item checked>
        <Text>Is very inspirational</Text>
      </Item>
      <Item checked>
        <Text>Only girls allowed</Text>
      </Item>
      <Item checked>
        <Text>
          Won the bt anime award 3 times
          <span className="is-size-7-desktop is-size-7-mobile"> probably... we didn't check</span>
        </Text>
      </Item>
      <Item checked>
        <Text>Is very inspirational</Text>
      </Item>
      <Item>
        <Text>Momo exists</Text>
      </Item>
    </Content>
  </div>;
