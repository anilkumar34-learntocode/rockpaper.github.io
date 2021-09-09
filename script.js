'use strict';

const rOck = 'rock';
const paper = 'paper';
const sIcor = 'sicssor';
const game = [rOck, paper, sIcor];
const playGame = document.querySelector('.btn');
const gamereset = document.querySelector('#games');
let play = true;

playGame.addEventListener('click', function () {
  const randomElement1 = game[Math.floor(Math.random() * game.length)];
  const randomElement2 = game[Math.floor(Math.random() * game.length)];
  console.log(randomElement1, randomElement2);
  if (play) {
    if (randomElement1 === game[0] && randomElement2 === game[1]) {
      document.getElementById('first').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 2 WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[0] && randomElement2 === game[2]) {
      document.getElementById('first').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 1 WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[1] && randomElement2 === game[0]) {
      document.getElementById('first').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 1 WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[1] && randomElement2 === game[2]) {
      document.getElementById('first').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 2 WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[2] && randomElement2 === game[0]) {
      document.getElementById('first').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(rock1.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 2 WINS . CLICK RESET`;
      play = false;
    } else if (randomElement1 === game[2] && randomElement2 === game[1]) {
      document.getElementById('first').style.background =
        'no-repeat url(sicssor.jpg) center';
      document.getElementById('first').style.backgroundSize = '10rem 10rem';
      document.getElementById('second').style.background =
        'no-repeat url(paper.jpg) center';
      document.getElementById('second').style.backgroundSize = '10rem 10rem';
      document.querySelector(
        '.heading'
      ).textContent = `PLAYER 1 WINS . CLICK RESET`;
      play = false;
    } else {
      if (randomElement1 === game[0]) {
        document.getElementById('first').style.background =
          'no-repeat url(rock1.jpg) center';
        document.getElementById('first').style.backgroundSize = '10rem 10rem';
      } else if (randomElement1 === game[1]) {
        document.getElementById('first').style.background =
          'no-repeat url(paper.jpg) center';
        document.getElementById('first').style.backgroundSize = '10rem 10rem';
      } else if (randomElement1 === game[2]) {
        document.getElementById('first').style.background =
          'no-repeat url(sicssor.jpg) center';
        document.getElementById('first').style.backgroundSize = '10rem 10rem';
      }
      if (randomElement2 === game[0]) {
        document.getElementById('second').style.background =
          'no-repeat url(rock1.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      } else if (randomElement2 === game[1]) {
        document.getElementById('second').style.background =
          'no-repeat url(paper.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      } else if (randomElement2 === game[2]) {
        document.getElementById('second').style.background =
          'no-repeat url(sicssor.jpg) center';
        document.getElementById('second').style.backgroundSize = '10rem 10rem';
      }
      document.querySelector(
        '.heading'
      ).textContent = `GAME IS DRAW CLICK RESET`;
      play = false;
    }
  }
});
gamereset.addEventListener('click', function () {
  play = true;
  document.querySelector('#first').style.backgroundImage = 'url(psr.jpg)';
  document.querySelector('#second').style.backgroundImage = 'url(psr.jpg)';
  document.querySelector('.heading').textContent = `ROCK,PAPER,SISCCOR`;
});
