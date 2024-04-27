import Player from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const stringifiedTime = localStorage.getItem("pausedTime");
if (stringifiedTime) {
  setCurrentTimePlayer(JSON.parse(stringifiedTime));
}

function setCurrentTimePlayer(seconds) {
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

player.on("play", function () {
  console.log("played the video!");
  getCurrentTimePlayer();
});

// player.getVideoTitle().then(function (title) {
//   console.log("title:", title);
// });

function getCurrentTimePlayer() {
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
