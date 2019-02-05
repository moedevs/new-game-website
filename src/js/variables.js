const availableGirls = [
  "hifumi",
  "hajime",
  "aoba"
];

const base = "../assets/twitter/avatars";

export var girls = availableGirls.reduce((total, girl) => ({
  ...total,
  [girl]: `${base}/${girl}.jpg`
}), {});

export var getGirl = (girl) => girls[girl];

