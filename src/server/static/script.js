const s  = window.location.href;
var pageLocation = (s.split('/').pop());
const color = '#ffc591';

function applyEffect(element){
    element.style.boxShadow = '0 0 20px #000;';
    element.style.color = color;
    element.style.textShadow = '-3px 3px 20px #a99fff, 1px -1px 20px #7b84ff;';
}

var elem;
switch (pageLocation) {
    case 'commands':
        elem = document.getElementById('commands-link');
        applyEffect(elem);
        break;
    case '':
    case 'home':
        elem = document.getElementById('home-link');
        applyEffect(elem);

}