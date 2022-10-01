
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DATA_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onPlay = function(data) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(DATA_KEY));

console.log(player.getCurrentTime());