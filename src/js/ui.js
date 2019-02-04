import { $, $$ } from './utils';
import PerfectScrollbar from "perfect-scrollbar";

const slides = $$('.twitter-slides');
console.log(slides);
// const ps = new PerfectScrollbar('#twitter-slides');

const toggleVisibility = node => {
  const isHidden = node.style.display === 'none';
  if (isHidden) {
    const { display } = node.dataset;
    node.style.display = display;
  } else {
    node.dataset.display = node.style.display;
    node.style.display = 'none';
  }
};

const toggleAllInGroup = (target) => {
  const name = target.textContent.trim();
  // Selecting all root elements after the current clicked one
  const root = [...$(`.section-header[data-label="${name}"] ~ .root-item`)];
  const selected = [];
  for (const element of root) {
    const limited = element.classList.contains('section-header');
    // if we get up to the next title section, stop
    if (limited) {
      break;
    }
    selected.push(element);
  }
  selected.forEach(toggleVisibility);
};


$('.section-header').forEach(node => {
  node.addEventListener('click', event => toggleAllInGroup(event.target));
});
