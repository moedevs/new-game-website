const endpoint = "https://www.reddit.com/r/newgame/about.json";
const discordEndpoint = "https://discordapp.com/api/v6/invite/ZWW5CJw?with_counts=true";
const rusers = document.querySelector('#reddit-users');
const dusers = document.querySelector('#discord-users');

const get = e => fetch(e).then(r => r.json());

get(endpoint)
  .then(r =>
    rusers.textContent = r.data.subscribers
  );
get(discordEndpoint)
  .then(r =>
    dusers.textContent = r.approximate_member_count
  );
