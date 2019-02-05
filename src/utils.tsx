import * as React from "react";

const interweave = <T extends {}>(one: T[], two: T[]) => one.reduce((total, item, i) => {
  if (!two[i]) {
    return [...total, item];
  }
  return [...total, item, two[i]];
}, []);

// doesn't really work lol
export const classy = (str: TemplateStringsArray, ...vars: string[]) =>
  () => <div className={interweave(Array.from(str), vars).join("")}/>;
