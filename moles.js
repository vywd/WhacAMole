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
            moles[i].classList.remove('fade-in');
            moles[i].classList.add('fade-out');
        }
        opened = false;
    } else {
        for (let i = 0; i < moles.length; i++) {
            moles[i].classList.remove('fade-out');
            moles[i].classList.add('fade-in');
            moles[i].classList.add('open');

        }
        opened = true;
    }
});


let score = 0;
document.getElementById('score').innerHTML = score;





const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
working = true;
score = 0;
time = 60;
document.getElementById('score').innerHTML = score;
timer(time);



})

function timer(time) {
    let myTimer = setInterval(function() {
      document.getElementById("timeleft").innerHTML = time;
      time--;
      if (time < 0) {
        working = false;
        clearInterval(myTimer);
      }
    }, 1000);
}