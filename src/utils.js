import * as React from "react";

export const proxy = "https://proxy.hifumi.io";
export const thumbnailProxy = `${proxy}/250`;
export const previewProxy = `${proxy}/600`;

export const CtxFanarts = React.createContext([]);

export function* infinite(arr) {
  let i = 0;
  while (true) {
    yield arr[i];
    i = (i + 1) % arr.length;
  }
}

export const anchorize = href => ({ href, target: "_blank", rel: "noopener" });

export const next = (iter) => iter.next().value;

export const seconds = (sec) => sec * 1000;
