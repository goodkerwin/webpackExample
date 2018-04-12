import _ from 'lodash';
import './css/style.css';
import Icon from './images/equipments.png';
import Data from './files/data.xml';
import printMe from './js/print.js';


  function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack!123'], ' ');

    var btn = document.createElement('button');
    btn.innerHTML = 'click';
    btn.onclick = printMe;
    element.appendChild(btn);
    
   element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);

    

    return element;



}
/*
//document.body.appendChild(component());
let element = component(); //当print.js改变导致页面重新渲染  需重新获取渲染元素
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./js/print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}


import {cube} from './js/math.js'

function component(){
    var element = document.createElement('pre');

    element.innerHTML = [
        'hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')

    return element
}*/

document.body.appendChild( component() );