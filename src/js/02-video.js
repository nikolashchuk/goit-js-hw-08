import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENTTIME = 'videoplayer-current-time';

// player.on(
//   'timeupdate',
//   throttle(function (currentTime) {
//     localStorage.setItem('seconds', JSON.stringify(currentTime.seconds));
//   }, 1000)
// );

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  localStorage.setItem(CURRENTTIME, JSON.stringify(currentTime));
}

const currentTime = localStorage.getItem(CURRENTTIME);

if (currentTime) {
  const { seconds } = JSON.parse(currentTime);
  player.setCurrentTime(seconds);
}
