const show = document.querySelector('#btn');
const moles = document.querySelectorAll('.mole');
let opened = false;
console.log(moles);
console.log(opened);
show.addEventListener('click', function() {
    console.log('pressed');
    if (opened) {
        for (let i = 0; i < moles.length; i++) {
            moles[i].classList.remove('open');
        }
        opened = false;
    } else {
        for (let i = 0; i < moles.length; i++) {
            moles[i].classList.add('open');
        }
        opened = true;
    }
});
