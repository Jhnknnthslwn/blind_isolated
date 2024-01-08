// level stuffs
let level = 1;
let levelevent = 0;
let map = [];
function mapChange() {
  switch (level) {
    case 1:
      map = [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "r", "r", "r", "w", "w", "r", "s", "s", "r", "g", "w"],
        ["w", "r", "r", "r", "r", "r", "r", "s", "s", "r", "r", "w"],
        ["w", "r", "w", "w", "r", "r", "r", "r", "w", "w", "r", "w"],
        ["w", "r", "w", "w", "r", "r", "r", "r", "w", "w", "r", "w"],
        ["w", "r", "r", "r", "w", "w", "r", "r", "r", "s", "s", "w"],
        ["w", "r", "r", "r", "w", "w", "s", "s", "s", "s", "s", "w"],
        ["w", "w", "w", "r", "r", "s", "s", "s", "w", "w", "s", "w"],
        ["w", "w", "w", "r", "r", "s", "s", "s", "w", "w", "s", "w"],
        ["w", "c", "c", "c", "c", "w", "w", "s", "s", "s", "s", "w"],
        ["w", "c", "c", "c", "c", "w", "w", "r", "r", "s", "s", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ];
      break;
    case 2:
      map = [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "c", "g", "c", "w", "r", "r", "r", "r", "r", "w", "w"],
        ["w", "c", "c", "c", "r", "r", "r", "w", "r", "r", "r", "w"],
        ["w", "c", "w", "c", "r", "r", "w", "w", "w", "r", "f", "w"],
        ["w", "w", "w", "w", "r", "r", "r", "w", "s", "s", "s", "w"],
        ["w", "c", "w", "c", "r", "w", "s", "s", "s", "w", "s", "w"],
        ["w", "c", "c", "c", "r", "r", "s", "w", "s", "s", "s", "w"],
        ["w", "c", "w", "c", "c", "r", "w", "w", "w", "s", "s", "w"],
        ["w", "c", "c", "c", "w", "r", "r", "w", "s", "s", "s", "w"],
        ["w", "c", "c", "w", "w", "w", "r", "r", "r", "r", "w", "w"],
        ["w", "c", "c", "c", "w", "r", "r", "r", "r", "r", "r", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ];
      break;
    case 3:
      map = [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "r", "r", "r", "w", "w", "w", "r", "r", "r", "w", "w"],
        ["w", "r", "g", "r", "r", "r", "r", "r", "r", "r", "r", "w"],
        ["w", "r", "r", "r", "w", "w", "w", "w", "r", "r", "w", "w"],
        ["w", "r", "w", "w", "c", "c", "c", "w", "w", "r", "w", "w"],
        ["w", "r", "w", "w", "c", "w", "c", "c", "w", "r", "w", "w"],
        ["w", "r", "r", "c", "c", "c", "c", "c", "c", "c", "w", "w"],
        ["w", "w", "s", "s", "w", "w", "s", "s", "w", "w", "w", "w"],
        ["w", "w", "s", "s", "s", "w", "s", "s", "s", "s", "s", "w"],
        ["w", "s", "s", "w", "w", "w", "w", "w", "s", "s", "s", "w"],
        ["w", "w", "r", "r", "r", "r", "r", "r", "r", "r", "w", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ];
      break;
    case 4:
      if (levelevent == 3) {
        map = [
          ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
          ["w", "r", "r", "r", "r", "r", "s", "s", "s", "w", "g", "w"],
          ["w", "r", "w", "w", "w", "r", "s", "w", "w", "w", "s", "w"],
          ["w", "r", "w", "w", "w", "w", "w", "w", "w", "w", "s", "w"],
          ["w", "r", "w", "w", "w", "r", "s", "w", "w", "w", "s", "w"],
          ["w", "c", "c", "w", "c", "c", "s", "w", "w", "w", "s", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "w", "c", "c", "c", "r", "r", "r", "r", "r", "w"],
          ["w", "c", "c", "c", "c", "c", "w", "r", "r", "r", "r", "w"],
          ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ];
      } else {
        map = [
          ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
          ["w", "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "w"],
          ["w", "r", "w", "w", "w", "r", "s", "w", "w", "w", "s", "w"],
          ["w", "r", "w", "w", "w", "r", "s", "w", "w", "w", "s", "w"],
          ["w", "r", "w", "w", "w", "r", "s", "w", "w", "w", "s", "w"],
          ["w", "c", "c", "c", "c", "c", "s", "w", "w", "w", "s", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "w", "w", "w", "c", "r", "w", "w", "w", "r", "w"],
          ["w", "c", "c", "c", "c", "c", "r", "r", "r", "r", "r", "w"],
          ["w", "c", "c", "c", "c", "c", "r", "r", "r", "r", "r", "w"],
          ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ];
      }
      break;
    case 5:
      map = [
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "w", "w", "w", "w", "w", "g", "f", "f", "f", "f", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "f", "f", "f", "f", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "f", "f", "f", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "f", "f", "f", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "c", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "c", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "c", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ];
      break;
    default:
      map = [];
      break;
  }
  document.getElementById("stagelvl").textContent = `Stage Level ${level}`;
}
// starting position stuffs
let playerPosition = {
  x: 0,
  y: 0,
};
let goalPosition = {
  x: 0,
  y: 0,
};
let mazeElement = document.getElementById("maze");
function generateLevel() {
  mapChange();
  switch (level) {
    case 1:
      playerPosition = {
        x: 1,
        y: 10,
      };
      goalPosition = {
        x: 10,
        y: 1,
      };
      break;
    case 2:
      playerPosition = {
        x: 7,
        y: 10,
      };
      goalPosition = {
        x: 2,
        y: 1,
      };
      break;
    case 3:
      playerPosition = {
        x: 5,
        y: 10,
      };
      goalPosition = {
        x: 2,
        y: 2,
      };
      break;
    case 4:
      if (levelevent == 3) {
        goalPosition = {
          x: 10,
          y: 1,
        };
      } else {
        playerPosition = {
          x: 1,
          y: 10,
        };
        goalPosition = {
          x: 20,
          y: 20,
        };
      }
      break;
    case 5:
      playerPosition = {
        x: 10,
        y: 10,
      };
      goalPosition = {
        x: 6,
        y: 2,
      };
      break;
    default:
      playerPosition = {
        x: 0,
        y: 0,
      };
      goalPosition = {
        x: 0,
        y: 0,
      };
      break;
  }
  map.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      let cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      if (cell == "w") {
        cellElement.classList.add("wall");
      } else if (rowIndex == playerPosition.y && colIndex == playerPosition.x) {
        cellElement.classList.add("player");
        cellElement.setAttribute("id", "character");
      } else if (rowIndex == goalPosition.y && colIndex == goalPosition.x) {
        cellElement.classList.add("goal");
      }
      mazeElement.appendChild(cellElement);
    });
  });
}
//generateLevel();
// log stuffs
let coordContainer = document.getElementById("coordinates");
function updateCoordinates(y, x) {
  y = y - y - y; //it flips the integer
  let newCoord = document.createElement("div");
  newCoord.classList.add("clog");
  newCoord.textContent ="Arrived at: " + x + ", " + y;
  coordContainer.appendChild(newCoord);
}
function logDialogue(something) {
  let newText = document.createElement("div");
  newText.classList.add("tlog");
  newText.textContent = something;
  coordContainer.appendChild(newText);
}

// Player Rotation
let rotation = 0;
function movePlayerTo(y, x) {
  const currentIndex = playerPosition.y * map[0].length + playerPosition.x;
  const newIndex = y * map[0].length + x;
  const cells = document.querySelectorAll(".cell");

  cells[currentIndex].removeAttribute("id", "character");
  cells[currentIndex].classList.remove("player");

  cells[newIndex].setAttribute("id", "character");
  cells[newIndex].classList.add("player");

  var character = document.getElementById("character");
  character.style.transform = "rotate(" + rotation + "deg)";

  playerPosition.x = x;
  playerPosition.y = y;
}
// tile block area stuffs
function tileTrigger(y, x) {
  switch (map[y][x]) {
    case "c":
      audio.roverc.play();
      break;
    case "f":
      audio.roverf.play();
      break;
    case "r":
      audio.roverr.play();
      break;
    case "s":
      audio.rovers.play();
      break;
    case "g":
      if (level == 5) {
        audio.vo5.play();
        setTimeout(() => {stageEnd();}, 6000);
      } else {
        mazeElement.innerHTML = "";
        coordContainer.innerHTML = "";
        stageEnd();
      }
      break;
    default:
      //alert('uncoded tile!')
      break;
  }
}
// goal proximity
function checkGoalProximity(y, x) {
  let distance = Math.abs(x - goalPosition.x) + Math.abs(y - goalPosition.y);
  switch (distance) {
    case 1:
      audio.prox1.play();
      break;
    case 2:
      audio.prox2.play();
      break;
    case 3:
      audio.prox3.play();
      break;
  }
}
// objective
let objective = { x: 5, y: 9 };
function checkObjectiveLine(y, x) {
  if (objective.x == playerPosition.x && objective.y != playerPosition.y) {
    if (objective.y < playerPosition.y) {
      audio.rockTu.play();
    } else {
      audio.rockTd.play();
    }
  } else if (
    objective.y == playerPosition.y &&
    objective.x != playerPosition.x
  ) {
    if (objective.x < playerPosition.x) {
      audio.rockTl.play();
    } else {
      audio.rockTr.play();
    }
  } else if (
    objective.x == playerPosition.x &&
    objective.y == playerPosition.y &&
    levelevent != 3
  ) {
    switch (levelevent) {
      case 0:
        // play objective rached audio
        objective = { x: 6, y: 10 };
        break;
      case 1:
        // play objective rached audio
        objective = { x: 6, y: 1 };
        break;
      case 2:
        // play objective rached audio
        objective = { x: 1, y: 1 };
        break;
      default:
        break;
    }
    levelevent++;
  } else if (
    objective.x == playerPosition.x &&
    objective.y == playerPosition.y &&
    levelevent == 3
  ) {
    // play objective rached audio
    mazeElement.innerHTML = "";
    generateLevel();
    audio.vo4e.play();
    objective = { x: 0, y: 0 };
  }
}
// event triggers
function levelEventTrigger(stage, eventnum, y, x) {
  if (stage == 3 && eventnum == 0 && y == 3 && x == 1) {
    audio.stgChange.play();
    levelevent = 1;
    map[4][1] = "w";
    movePlayerTo(6, 1);
    updateCoordinates(y, x);
  } else if (stage == 4 && eventnum <= 4) {
    checkObjectiveLine(y, x);
  }
}
// move cooldown
let isCooldownActive = false;
function startCooldown(time) {
  isCooldownActive = true;
  setTimeout(() => {
    isCooldownActive = false;
  }, time);
}
// listener
document.addEventListener("keyup", function (event) {
  if (!isCooldownActive) {
    keyPress(event.key);
  }
});
/*
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
      startup();
  }
});
*/
// main process
let newY = 0;
let newX = 0;
let nUp = '';
let nRight = '';
let nDown = '';
let nLeft = '';
let checkGameDiv = document.getElementById("gamescreen");
function keyPress(key) {
  newX = playerPosition.x;
  newY = playerPosition.y;
  /*
  nUp = map[playerPosition.y - 1][playerPosition.x];
  nRight = map[playerPosition.y][playerPosition.x + 1];
  nDown = map[playerPosition.y + 1][playerPosition.x];
  nLeft = map[playerPosition.y][playerPosition.x - 1];
  */
  switch (key) {
    case "w":
      rotation = 0;
      newY = newY - 1;
      playerTrigger();
      break;
    case "s":
      rotation = 180;
      newY = newY + 1;
      playerTrigger();
      break;
    case "a":
      rotation = -90;
      newX = newX - 1;
      playerTrigger();
      break;
    case "d":
      rotation = 90;
      newX = newX + 1;
      playerTrigger();
      break;
    case "ArrowUp":
      rotation = 0;
      newY = newY - 1;
      playerTrigger();
      break;
    case "ArrowDown":
      rotation = 180;
      newY = newY + 1;
      playerTrigger();
      break;
    case "ArrowLeft":
      rotation = -90;
      newX = newX - 1;
      playerTrigger();
      break;
    case "ArrowRight":
      rotation = 90;
      newX = newX + 1;
      playerTrigger();
      break;
    case " ":
      // create functionality similar to this that activates once player will meet a wall compare playerPosition and neW to do that
      nUp = map[playerPosition.y - 1][playerPosition.x];
      nRight = map[playerPosition.y][playerPosition.x + 1];
      nDown = map[playerPosition.y + 1][playerPosition.x];
      nLeft = map[playerPosition.y][playerPosition.x - 1];
      startCooldown(4000);
      if (nUp == "w") {
        setTimeout(audio.scanu.play, 0);
      } else {
        setTimeout(audio.scannull.play, 0);
      }
      if (nRight == "w") {
        setTimeout(audio.scanr.play, 1000);
      } else {
        setTimeout(audio.scannull.play, 1000);
      }
      if (nDown == "w") {
        setTimeout(audio.scand.play, 2000);
      } else {
        setTimeout(audio.scannull.play, 2000);
      }
      if (nLeft == "w") {
        setTimeout(audio.scanl.play, 3000);
      } else {
        setTimeout(audio.scannull.play, 3000);
      }
      break;
    case "Enter":
      if (window.getComputedStyle(checkGameDiv).display == "none") {
        startup();
      }
      break;
    default:
      newY = null;
      newX = null;
      break;
  }
  /*
  if (map[newY][newX] != "w") {
    startCooldown();
    movePlayerTo(newY, newX);
    updateCoordinates(newY, newX);
    checkGoalProximity(newY, newX);
    tileTrigger(newY, newX);
    levelEventTrigger(level, levelevent, playerPosition.y, playerPosition.x);
  } else if (map[newY][newX] == "w") {
    setTimeout(audio.rover2.play, 0);
    alert("congrats you hit a wall");
  } else {
  }
  */
}
function playerTrigger() {
  if (map[newY][newX] != "w") {
    startCooldown(2500);
    movePlayerTo(newY, newX);
    logDialogue("Moving......");
    setTimeout(() => {
      updateCoordinates(newY, newX);
      logDialogue("System:");
      logDialogue("Awaiting Input");
    }, 2500);
    checkGoalProximity(newY, newX);
    tileTrigger(newY, newX);
    levelEventTrigger(level, levelevent, playerPosition.y, playerPosition.x);
  } else {
    audio.meetWall.play();
    logDialogue("Impassable terrain detected");
  }
}
window.onload = function() {
    setTimeout(() => {
    audio.voM.play();
  }, 2000);
}
/*
function onSiteLoad() {
  setTimeout(() => {
    audio.voM.play();
  }, 2000);
}
// funct 1
window.onload = onSiteLoad();
// funct 2
window.onload = function() {
    setTimeout(() => {
    audio.voM.play();
  }, 2000);
}
function creditsBGM() {
  if(audio.credsBGM.isPlaying){
  } else {
    audio.credsBGM.startLoop();
  }
}
*/
function startup() {
  level = 1;
  show("gamescreen", "startscreen");
  generateLevel();
  logDialogue("System:");
  logDialogue("Use WASD or Arrow Keys to move");
  audio.vo1.play();
}
// end
function stageEnd() {
  //insert stage end events here
  level++;
  levelevent == 0;
  generateLevel();
  // add transition sound
  switch (level) {
    case 2:
      logDialogue("System:");
      logDialogue("Use space to scan nearby terrain");
      audio.vo2.play();
      break;
    case 3:
      logDialogue("System:");
      logDialogue("Warning: unstable area detected");
      audio.vo3.play();
      break;
    case 4:
      logDialogue("Assistant:");
      logDialogue("Follow where the rocks will hit you until the map shows my marker");
      audio.vo4.play();
      break;
    case 5:
      break;
    case 6:
      window.location.href='credits.html'
      break;
    default:
      alert("Stage Loading Error");
      break;
  }
}
// show hide switch screens stuffs
function show(shown, hidden) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(hidden).style.display = "none";
  return false;
}
//audio stuffs
var audio = new preloadAudio();
function audioTrack(url, volume) {
  var audio = new Audio(url);
  if (volume) audio.volume = volume;
  audio.load();
  var looping = false;
  this.play = function (noResetTime) {
    playSound(noResetTime);
  };
  this.startLoop = function (noResetTime) {
    if (looping) return;
    audio.addEventListener("ended", audioLoop);
    audioLoop(noResetTime);
    looping = true;
  };
  this.stopLoop = function (noResetTime) {
    try {
      audio.removeEventListener("ended", audioLoop);
    } catch (e) {}
    audio.pause();
    if (!noResetTime) audio.currentTime = 0;
    looping = false;
  };
  this.isPlaying = function () {
    return !audio.paused;
  };
  this.isPaused = function () {
    return audio.paused;
  };
  this.stop = this.stopLoop;

  function audioLoop(noResetTime) {
    playSound(noResetTime);
  }
  function playSound(noResetTime) {
    // for really rapid sound repeat set noResetTime
    if (!audio.paused) {
      audio.pause();
      if (!noResetTime) audio.currentTime = 0;
    }
    try {
      var playPromise = audio.play();
      if (playPromise) {
        playPromise.then(function () {}).catch(function (err) {});
      }
    } catch (err) {
      console.error(err);
    }
  }
}
// audio location stuffs
function preloadAudio() {
  this.prox1 = new audioTrack("sounds/proximity-1.mp3", 0.5);
  this.prox2 = new audioTrack("sounds/proximity-2.mp3", 0.5);
  this.prox3 = new audioTrack("sounds/proximity-3.mp3", 0.5);

  this.rockTu = new audioTrack("sounds/rockt-forward.mp3", 0.9);
  this.rockTr = new audioTrack("sounds/rockt-right.mp3", 0.9);
  this.rockTd = new audioTrack("sounds/rockt-behind.mp3", 0.9);
  this.rockTl = new audioTrack("sounds/rockt-left.mp3", 0.9);

  this.roverc = new audioTrack("sounds/rover-concrete.mp3", 0.7);
  this.roverf = new audioTrack("sounds/rover-forest.mp3", 0.7);
  this.roverr = new audioTrack("sounds/rover-rock.mp3", 0.5);
  this.rovers = new audioTrack("sounds/rover-sand.mp3", 0.7);

  this.scanu = new audioTrack("sounds/scan-forward.mp3");
  this.scanr = new audioTrack("sounds/scan-right.mp3");
  this.scand = new audioTrack("sounds/scan-behind.mp3");
  this.scanl = new audioTrack("sounds/scan-left.mp3");

  this.voM = new audioTrack("sounds/menu-vo.mp3", 0.5);
  this.vo1 = new audioTrack("sounds/start-vo.mp3", 0.5);
  this.vo2 = new audioTrack("sounds/level2-vo.mp3", 0.5);
  this.vo3 = new audioTrack("sounds/level3-vo.mp3", 0.5);
  this.vo4 = new audioTrack("sounds/level4-vo.mp3", 0.5);
  this.vo4e = new audioTrack("sounds/level4-of-vo.mp3", 0.5);
  this.vo5 = new audioTrack("sounds/end-vo.mp3", 0.5);

  // this.credsBGM = new audioTrack("sounds/credits-bgm.mp3", 0.5);
  this.meetWall = new audioTrack("sounds/move-meet-wall.mp3", 0.5);
  this.objReach = new audioTrack("sounds/obj-reached.mp3", 0.5);
  this.stgChange = new audioTrack("sounds/stage-change.mp3", 0.4);
  this.stgTrans = new audioTrack("sounds/stage-trans.mp3", 0.5);
  this.scannull = new audioTrack("sounds/scan-null.mp3", 0.5);
}
