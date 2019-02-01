import { $$, get } from './utils';

const endpoint = "https://www.reddit.com/r/newgame/about.json";
const discordEndpoint = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true";

const rusers = $$('#reddit-users');
const dusers = $$('#discord-users');


get(endpoint).then(r =>
  rusers.textContent = r.data.subscribers
);

get(discordEndpoint).then(r =>
  dusers.textContent = r.approximate_member_count
);
