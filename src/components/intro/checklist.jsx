import * as React from "react";
import { Box, Content, Icon, Level, LevelItem, LevelLeft, Subtitle } from "bloomer";

import "./checklist.scss";

const textClass = "is-size-4-desktop is-size-6-tablet checklist-text";

const Item = ({ checked, text }) =>
      <span style={{ display: "flex", alignItems: "center" }}>
        {checked
          ? <Icon className="fas fa-check has-text-primary" style={{ marginRight: "10px" }}/>
          : <Icon className="fas fa-times has-text-danger" style={{ marginRight: "10px" }}/>}
        {typeof text === "string"
          ? <p className={textClass}>{text}</p>
          : text
        }
      </span>;

export const Checklist = () =>
    <Content style={{ display: "inline-flex", margin: '0 auto', flexDirection: "column" }}>
      {/* <Subtitle className="has-text-grey-dark">Why New Game! <i>could be</i> the best anime</Subtitle>*/}
      <Item checked text="Has the best girls"/>
      <Item checked text="Is very inspirational"/>
      <Item checked text="Only girls allowed"/>
      <Item checked text="Includes programming"/>
      <Item tag="span" checked text={
        <p className={textClass}>
          Won the best anime award 3 times
          <span className="is-size-7-desktop is-size-7-mobile"> maybe... we didn't check</span>
        </p>
      }/>
      <Item checked text="Ongoing manga"/>
      <Item checked={false} text="No season 3 (yet)"/>
    </Content>;
