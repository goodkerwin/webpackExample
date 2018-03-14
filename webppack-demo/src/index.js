import _ from 'lodash';
import './css/style.css';
import Icon from './images/equipments.png';
import Data from './files/data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack!123'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());