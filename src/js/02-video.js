// Імпорт бібліотек:
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Отримання посилання на iframe та створення об'єкту Player:
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Зберігання часу програвання в локальному сховищі:  
const STORAGE_PLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(data) {
  const currenTime = data.seconds;

  localStorage.setItem(STORAGE_PLAYER_KEY, currenTime);
}

// Відновлення часу програвання після завантаження сторінки:
player.setCurrentTime(localStorage.getItem(STORAGE_PLAYER_KEY) || 0);