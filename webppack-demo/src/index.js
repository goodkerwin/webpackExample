import _ from 'lodash';
/*import './css/style.css';
import Icon from './images/equipments.png';
import Data from './files/data.xml';*/
import printMe from './js/print.js';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack!123'], ' ');

    var btn = document.createElement('button');
    btn.innerHTML = 'click';
    btn.onclick = printMe;
    element.appendChild(btn);
    
 
  /*  element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);*/

    

    return element;



}

document.body.appendChild(component());