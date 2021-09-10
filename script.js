'use strict';
let iteM;
const game = ['rock', 'paper', 'sicssor'];
const playGame = document.querySelector('.btn');
const gamereset = document.querySelector('#games');
let play = true;
let seL;
document.querySelector('.rock').addEventListener('click', function () {
  seL = true;
  iteM = game[0];
  document.getElementById('first').style.background =
    'no-repeat url(rock1.jpg) center';
  document.getElementById('first').style.backgroundSize = '10rem 10rem';
});
document.querySelector('.paper').addEventListener('click', function () {
  iteM = game[1];
  document.getElementById('first').style.background =
    'no-repeat url(paper.jpg) center';
  document.getElementById('first').style.backgroundSize = '10rem 10rem';
});
document.querySelector('.sicssor').addEventListener('click', function () {
  iteM = game[2];
  document.getElementById('first').style.background =
    'no-repeat url(sicssor.jpg) center';
  document.getElementById('first').style.backgroundSize = '10rem 10rem';
});

playGame.addEventListener('click', function () {
  const randomElement1 = game[Math.floor(Math.random() * game.length)];

  if (play) {
    if (randomElement1 === game[0] && iteM === game[1]) {
      document.getElementById('second').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[0] && iteM === game[2]) {
      document.getElementById('second').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector('.heading').textContent = `CPU WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[1] && iteM === game[0]) {
      document.getElementById('second').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector('.heading').textContent = `CPU WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[1] && iteM === game[2]) {
      document.getElementById('second').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[2] && iteM === game[0]) {
      document.getElementById('second').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[2] && iteM === game[1]) {
      document.getElementById('second').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector('.heading').textContent = `CPU WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === iteM) {
      if (randomElement1 === game[0]) {
        document.getElementById('second').style.background =
          'no-repeat url(rock1.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      } else if (randomElement1 === game[1]) {
        document.getElementById('second').style.background =
          'no-repeat url(paper.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      } else if (randomElement1 === game[2]) {
        document.getElementById('second').style.background =
          'no-repeat url(sicssor.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      }
      document.querySelector(
        '.heading'
      ).textContent = `GAME IS DRAW CLICK RESET`;
      play = false;
    }
  } else {
    document.querySelector('.heading').textContent = `PLEASE CLICK RESET`;
    play = false;
  }
});
gamereset.addEventListener('click', function () {
  play = true;
  document.querySelector('#first').style.backgroundImage = 'url(psr.jpg)';
  document.querySelector('#second').style.backgroundImage = 'url(psr.jpg)';
  document.querySelector('.heading').textContent = `ROCK,PAPER,SISCCOR`;
  if ((iteM = '')) {
    play = false;
  } else {
    play = true;
  }
});
