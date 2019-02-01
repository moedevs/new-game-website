export const $$ = document.querySelector.bind(document);
export const $ = document.querySelectorAll.bind(document);
export const get = (e, ...opts) => fetch(e, ...opts).then(r => r.json());
