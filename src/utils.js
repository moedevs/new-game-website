import * as React from "react";

export const CtxFanarts = React.createContext([]);

export function* infinite(arr) {
  let i = 0;
  while (true) {
    yield arr[i];
    i = (i + 1) % arr.length;
  }
}

export const anchorize = href => ({ href, target: "_blank" });

export const next = (iter) => iter.next().value;

export const seconds = (sec) => sec * 1000;
