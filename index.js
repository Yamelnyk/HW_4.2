'use strict'

let myBtn = document.querySelector('.btn');
let myDate = document.querySelector('.date');

myBtn.textContent = localStorage.getItem('btnText') || 'Turn off';
myDate.textContent = localStorage.getItem('dateText') || 'No date';

function changeEvents () {
    let date = new Date().toLocaleString();
    if ( myBtn.textContent === 'Turn off') {
        myDate.textContent = ('Last turn off:'+ date);
        localStorage.setItem('dateText', ('Last turn off:'+ date));
        localStorage.setItem('btnText', 'Turn on');
        myBtn.textContent = 'Turn on';
        document.body.style.background = 'grey';
    } else { 
        myDate.textContent = ('Last turn on:'+ date);
        localStorage.setItem('dateText', ('Last turn on:'+ date)); 
        localStorage.setItem('btnText', 'Turn off');
        myBtn.textContent = 'Turn off';
        document.body.style.background = 'white';
    }
}

myBtn.addEventListener('click', changeEvents)
