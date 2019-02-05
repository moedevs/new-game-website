import { $$, get } from './utils';

const endpoint = "https://whamer.000webhostapp.com/api/hifumi.php";

const rusers = $$('#reddit-users');
const dusers = $$('#discord-users');

get(endpoint, { mode: "cors" } ).then(r => {
  rusers.textContent = r.subscribers;
  dusers.textContent = r.discordUsers;
}).catch(r => {
  // console.log(r);
  // TODO: move error logging to sentry
  // TODO: add backup incase hifumi api is down
});
