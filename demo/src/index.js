import _ from 'lodash';

function compoment() {
    var element =document.createElement(div);

    //Lodash , now imported by this script
    element.innerHTML = _.join(['hello','webpack'],'');

    return element
}

document.body.appendChild(compoment());