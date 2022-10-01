
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const DATA_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? 0 : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const onPlay = function(data) {
  save(DATA_KEY, data.seconds);

};

player.on('timeupdate', throttle(onPlay, 1000));



player.setCurrentTime(load(DATA_KEY));