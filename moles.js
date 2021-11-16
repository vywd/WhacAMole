
const moles = document.querySelectorAll('.mole');
const gameend = document.querySelector('.game_ended_overlay');
let working = true;

const show = document.querySelector('#btn');
let opened = false;
console.log(moles);
console.log(opened);
show.addEventListener('click', function() {
    console.log('pressed');
    if (opened) {
        for (let i = 0; i < moles.length; i++) {
            //moles[i].classList.remove('open');
            moles[i].classList.remove('fade-in');
            moles[i].classList.add('fade-out');
        }
        opened = false;
    } else {
        for (let i = 0; i < moles.length; i++) {
            moles[i].classList.remove('fade-out');
            moles[i].classList.add('fade-in');
            //moles[i].classList.add('open');

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
    time = 10;
    document.getElementById('score').innerHTML = score;
    reset.innerHTML = 'Reset Game';
    

    timer(time);

    let molesMooves = setInterval( () => {
        let i = Math.trunc(Math.random()*8+1);
        //console.log(i);
        if (moles[i].classList.contains('fade-out')){
        moles[i].classList.remove('fade-out');     // is this class present?
        }
        moles[i].classList.add('fade-in');
        //moles[i].classList.add('open');

        moles[i].addEventListener('click', foo);        // only one click on mole

        function foo() {
            score++;
            document.getElementById('score').innerHTML = score;
            moles[i].removeEventListener('click', foo);
        }

        let molesinterval = setTimeout (() => {
            //moles[i].classList.remove('open');
            moles[i].classList.remove('fade-in');
            moles[i].classList.add('fade-out');
        }, 1500)
        if (!working) {
            clearInterval(molesMooves);
        }
    }, 1000);
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

if (!working) {
    gameend.classList.add('fade-in');
    reset.classList.add('fade-in');
}
