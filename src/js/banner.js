import { $$, get } from './utils';

const endpoint = "http://whamer.comxa.com/api/hifumi.php";

const rusers = $$('#reddit-users');
const dusers = $$('#discord-users');


get(endpoint, { mode: "cors" } ).then(r => {
  //console.log(r),
  rusers.textContent = r.subscribers,
  dusers.textContent = r.discordUsers
});
