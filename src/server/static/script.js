const s  = window.location.href;
var pageLocation = (s.split('/').pop());
const color = '#ffc591'
switch (pageLocation) {
    case 'commands':
        document.getElementById('commands-link').style.color = color;
        break;
    case '':
    case 'home':
        document.getElementById('home-link').style.color = color;

}