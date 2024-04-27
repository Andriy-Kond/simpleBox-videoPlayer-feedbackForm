import Player from "@vimeo/player";
const throttle = require("lodash.throttle");

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const stringifiedTime = localStorage.getItem("pausedTime");
if (stringifiedTime) {
  getCurrentTimePlayer(JSON.parse(stringifiedTime));
}

function getCurrentTimePlayer(seconds) {
  player
    .setCurrentTime(seconds)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case "RangeError":
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

function setCurrentTimePlayer() {
  console.log("time updated ");
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log("seconds:::", seconds);
      localStorage.setItem("pausedTime", JSON.stringify(seconds));
    })
    .catch(function (error) {
      console.log("error:::", error);
      // an error occurred
    });
}

// ^ Варіант з відстежуванням поточної позиції за допомогою події play (коли ставиться пауза. при перезавантаженні буде остання позиція паузи)
// player.on("play", function () {
//   console.log("played the video!");
//   setCurrentTimePlayer();
// });

// ^ Варіант з відстежуванням поточної позиції за допомогою події timeupdate
player.on(
  "timeupdate",
  throttle(() => {
    console.log("played the video!");
    setCurrentTimePlayer();
  }, 1000),
);
