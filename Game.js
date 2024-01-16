//document names
let mazeElement = document.getElementById("maze");
let coordContainer = document.getElementById("coordinates");
let checkGameDiv = document.getElementById("gamescreen");
let wallSwitch = document.getElementById("wallToggle");
let isWswitchvis = wallSwitch.getAttribute("hidden");


//starting game values
let level = 1;
let levelevent = 0;
let map = [];
let playerPosition = {x: 0, y: 0};
let goalPosition = {x: 0, y: 0};
let rotation = 0; //player icon rotation
let objective = {x: 5, y: 9}; //location of first objective in stage 4
let isCooldownActive = false;
let newY = 0;
let newX = 0;
let nUp = '';
let nRight = '';
let nDown = '';
let nLeft = '';
let isWallVisible = false; //used to enable accessibility features
let playerDirection = 'z';
let wallHitT = 0;


//map swap / map change / level change function
function mapChange() {
    switch (level) {
        case 0:
            map = [ // move the wall down once they hit it
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "g", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "c", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "c", "c", "w", "w"],
                ["w", "w", "w", "w", "w", "c", "c", "c", "w", "c", "w", "w"],
                ["w", "w", "w", "w", "c", "c", "w", "c", "c", "c", "w", "w"],
                ["w", "w", "w", "w", "c", "c", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
            ];
            break;
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
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
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
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
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
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
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
                    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
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
                    ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
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
                ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"]
            ];
            break;
        default:
            map = [];
            break;
    }
    if (level <= 5) {
    document.getElementById("stagelvl").textContent = `Stage Level ${level}`;
  }
}


// generate map
function generateMap() {
    map.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            let cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            if (cell == "w") {
                if (isWallVisible) {
                    cellElement.classList.add("wall");
                }
            } else if (rowIndex == playerPosition.y && colIndex == playerPosition.x) {
                cellElement.classList.add("player");
                cellElement.setAttribute("id", "character");
            } else if (rowIndex == goalPosition.y && colIndex == goalPosition.x) {
                cellElement.classList.add("goal");
            }
            mazeElement.appendChild(cellElement);
        });
    });
    character.style.transform = "rotate(" + rotation + "deg)";
}


// generates the level and sets player and goal position
function generateLevel() {
    mapChange();
    switch (level) {
        case 0:
            playerPosition = {x: 5, y: 8};
            goalPosition = {x: 8, y: 2};
            break;
        case 1:
            playerPosition = {x: 1, y: 10};
            goalPosition = {x: 10, y: 1};
            break;
        case 2:
            playerPosition = {x: 7, y: 10};
            goalPosition = {x: 2, y: 1};
            break;
        case 3:
            playerPosition = {x: 5, y: 10};
            goalPosition = {x: 2, y: 2};
            break;
        case 4:
            if (levelevent == 3) {
                goalPosition = {x: 10, y: 1};
            } else {
                playerPosition = {x: 1, y: 10};
                goalPosition = {x: 20, y: 20};
            }
            break;
        case 5:
            playerPosition = {x: 10, y: 10};
            goalPosition = {x: 6, y: 2};
            break;
        default:
            playerPosition = {x: 0, y: 0};
            goalPosition = {x: 0, y: 0};
            break;
    }
    generateMap();
}


//create log entry functions
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


//player & icon move
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


//direction vo terminator
function stopDvo() {
    if (audio.voN.isPlaying) {
        audio.voN.stop();
    } else if (audio.voE.isPlaying) {
        audio.voE.stop();
    } else if (audio.voS.isPlaying) {
        audio.voS.stop();
    } else if (audio.voW.isPlaying) {
        audio.voW.stop();
    }
}


// tile checker
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
                setTimeout(() => {
                    stageEnd();
                }, 6000);
            } else {
                audio.stgTrans.play();
                setTimeout(() => {
                    stopDvo();
                    mazeElement.innerHTML = "";
                    coordContainer.innerHTML = "";
                    stageEnd();
                }, 2510);
            }
            break;
        default:
            //alert('uncoded tile!')
            break;
    }
}


//ending codes
function stageEnd() {
    //insert stage end events here
    if (level == 0) {
        level = 2;
    } else {
        level++;
    }
    levelevent = 0;
    wallHitT = 0;
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
            //alert("Stage Loading Error");
        break;
    }
}


//checks player's proximity to the goal
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


//event triggers for each stage
function levelEventTrigger(stage, y, x) {
    if (stage == 0) {
        if (levelevent == 0) {
            if (y == 7 && x == 5) {
                alert('move left');
                levelevent++;
            }
        } else if (levelevent == 1) {
            if (y == 7 && x == 4) {
                alert('move up');
                levelevent++;
            }
        } else if (levelevent == 2) {
            if (y == 6 && x == 4) {
                alert('move right');
                levelevent++;
            }
        } else if (levelevent == 3) {
            if (y == 6 && x == 5) {
                alert('move down');
                map[7][5] = "w";
                mazeElement.innerHTML = "";
                generateMap();
                levelevent++;
            }
        }
    } else if (stage == 3) {
        if (levelevent == 0) {
            if (y == 3 && x == 1) {
                audio.stgChange.play();
                map[4][1] = "w";
                mazeElement.innerHTML = "";
                generateMap();
                movePlayerTo(6, 1);
                updateCoordinates(y, x);
                levelevent++;
            }
        }
    } else if (stage == 4) {
        if (levelevent <= 4) { //while level event is still not 5 it checks the relativity between the player and obj
            if (objective.x == playerPosition.x && objective.y != playerPosition.y) {
                if (objective.y < playerPosition.y) {
                    audio.rockTu.play();
                } else {
                    audio.rockTd.play();
                }
            } else if (objective.y == playerPosition.y && objective.x != playerPosition.x) {
                if (objective.x < playerPosition.x) {
                    audio.rockTl.play();
                } else {
                    audio.rockTr.play();
                }
            } else if (objective.x == playerPosition.x && objective.y == playerPosition.y) {
                if (levelevent == 3) {
                    mazeElement.innerHTML = "";
                    generateLevel();
                    audio.vo4e.play();
                    objective = {x: 0, y: 0};
                } else {
                    switch (levelevent) {
                    case 0:
                        audio.obj1c.play();
                        objective = { x: 6, y: 10 };
                        break;
                    case 1:
                        audio.obj2c.play();
                        objective = { x: 6, y: 1 };
                        break;
                    case 2:
                        audio.obj3c.play();
                        objective = { x: 1, y: 1 };
                        break;
                    default:
                        break;
                    }
                    levelevent++;
                }
            }
        }
    }
}


//movement cooldown
function startCooldown(time) {
    isCooldownActive = true;
    setTimeout(() => {
        isCooldownActive = false;
    }, time);
}


//key listener
document.addEventListener("keyup", function (event) {
    if (!isCooldownActive) {
        keyPress(event.key);
    }
});


//compressed all triggers in one place
function playerTrigger() {
    if (map[newY][newX] != "w") {
        if (isWallVisible) {
            startCooldown(3000);
        } else {
            //startCooldown(2250);
        }
        movePlayerTo(newY, newX);
        checkGoalProximity(newY, newX);
        tileTrigger(newY, newX);
        levelEventTrigger(level, playerPosition.y, playerPosition.x);
        logDialogue("Moving......");
        setTimeout(() => {
            switch (playerDirection) {
                case 'n':
                    logDialogue("Moved North");
                    break;
                case 'e':
                    logDialogue("Moved East");
                    break;
                case 's':
                    logDialogue("Moved South");
                    break;
                case 'w':
                    logDialogue("Moved West");
                    break;
            }
            updateCoordinates(newY, newX);
            logDialogue("System:");
            logDialogue("Awaiting Input");
            if (isWallVisible) {
                switch (playerDirection) {
                    case 'n':
                        audio.voN.play();
                        break;
                    case 'e':
                        audio.voE.play();
                        break;
                    case 's':
                        audio.voS.play();
                        break;
                    case 'w':
                        audio.voW.play();
                        break;
                }
            }
        }, 2250);
    } else {
        if (level == 0) {
            if (levelevent == 4) {
                alert("heet a wall");
                level++;
            }
        }
        wallHitT++;
        if (wallHitT % 5 == 0) {
            //button appear
            wallSwitch.removeAttribute("hidden");
        }
        audio.meetWall.play();
        logDialogue("Impassable terrain detected");
    }
}


//keypress events
function keyPress(key) {
    newX = playerPosition.x;
    newY = playerPosition.y;
    switch (key) {
        case "l":
            wallTemp();
            break;
        case "w":
            rotation = 0;
            newY = newY - 1;
            playerDirection = 'n';
            playerTrigger();
            break;
        case "s":
            rotation = 180;
            newY = newY + 1;
            playerDirection = 's';
            playerTrigger();
            break;
        case "a":
            rotation = -90;
            newX = newX - 1;
            playerDirection = 'w';
            playerTrigger();
            break;
        case "d":
            rotation = 90;
            newX = newX + 1;
            playerDirection = 'e';
            playerTrigger();
            break;
        case "W":
            rotation = 0;
            newY = newY - 1;
            playerDirection = 'n';
            playerTrigger();
            break;
        case "S":
            rotation = 180;
            newY = newY + 1;
            playerDirection = 's';
            playerTrigger();
            break;
        case "A":
            rotation = -90;
            newX = newX - 1;
            playerDirection = 'w';
            playerTrigger();
            break;
        case "D":
            rotation = 90;
            newX = newX + 1;
            playerDirection = 'e';
            playerTrigger();
            break;
        case "ArrowUp":
            rotation = 0;
            newY = newY - 1;
            playerDirection = 'n';
            playerTrigger();
            break;
        case "ArrowDown":
            rotation = 180;
            newY = newY + 1;
            playerDirection = 's';
            playerTrigger();
            break;
        case "ArrowLeft":
            rotation = -90;
            newX = newX - 1;
            playerDirection = 'w';
            playerTrigger();
            break;
        case "ArrowRight":
            rotation = 90;
            newX = newX + 1;
            playerDirection = 'e';
            playerTrigger();
            break;
        case " ": // create functionality similar to this that activates once player will meet a wall compare playerPosition and neW to do that
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
            break;
    }
}


//on window load
window.onload = function() {
    audio.voM.play();
}


//on game load
function startup() {
    if(audio.voM.isPlaying) {
        audio.voM.stop();
    }
    level = 1;
    show("gamescreen", "startscreen");
    generateLevel();
    logDialogue("System:");
    logDialogue("Use WASD or Arrow Keys to move");
    audio.vo1.play();
}


//tutorial startup
function startupT() {
    if(audio.voM.isPlaying) {
        audio.voM.stop();
    }
    level = 0;
    isCooldownActive = true;
    show("gamescreen", "startscreen");
    generateLevel();
    logDialogue("System:");
    logDialogue("Use WASD or Arrow Keys to move");
    setTimeout(() => {
        isCooldownActive = false;
        movePlayerTo(7, 5);
        levelEventTrigger(level, playerPosition.y, playerPosition.x);
    }, 1000);
    
}


//toggles wall visibility
function wallToggle() {
    mazeElement.innerHTML = "";
    if (isWallVisible == true) {
        isWallVisible = false;
    } else {
        isWallVisible = true;
    }
    generateMap();
}


//temp wall
function wallTemp() {
    mazeElement.innerHTML = "";
    isWallVisible = true;
    generateMap();

    setTimeout(() => {
        mazeElement.innerHTML = "";
        isWallVisible = false;
        generateMap();
    }, 1000);
    // hide button
    wallSwitch.setAttribute("hidden", "hidden");
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

    this.voN = new audioTrack("sounds/movenorth.mp3");
    this.voE = new audioTrack("sounds/moveeast.mp3");
    this.voS = new audioTrack("sounds/movesouth.mp3");
    this.voW = new audioTrack("sounds/movewest.mp3");
  
    this.voM = new audioTrack("sounds/menu-vo.mp3", 0.5);
    this.vo1 = new audioTrack("sounds/start-vo.mp3", 0.5);
    this.vo2 = new audioTrack("sounds/level2-vo.mp3", 0.5);
    this.vo3 = new audioTrack("sounds/level3-vo.mp3", 0.5);
    this.vo4 = new audioTrack("sounds/level4-vo.mp3", 0.5);
    this.vo4e = new audioTrack("sounds/level4-of-vo.mp3", 0.5);
    this.vo5 = new audioTrack("sounds/end-vo.mp3", 0.5);
  
    this.credsBGM = new audioTrack("sounds/credits-bgm.mp3", 0.7);
    this.meetWall = new audioTrack("sounds/move-meet-wall.mp3", 0.5);
    this.objReach = new audioTrack("sounds/obj-reached.mp3", 0.7);
    this.stgChange = new audioTrack("sounds/stage-change.mp3", 0.5);
    this.stgTrans = new audioTrack("sounds/stage-trans.mp3", 0.7);
    this.scannull = new audioTrack("sounds/scan-null.mp3", 0.7);
  
    this.obj1c = new audioTrack("sounds/obj1comp.mp3");
    this.obj2c = new audioTrack("sounds/obj2comp.mp3");
    this.obj3c = new audioTrack("sounds/obj3comp.mp3");
}
