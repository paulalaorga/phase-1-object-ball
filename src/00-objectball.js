function gameObject(){
const gameObj = {
home: {
    teamName:"Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
        "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
        },
        "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
        },
        "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
        },
        "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
        },
        "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
        },
    }
},
away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
        "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
        },
        "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
        },
        "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
        },
        "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
        },
        "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
        },
    }
},
};
return gameObj;
};
function numPointsScored(playerName) {
    const gameObj = gameObject();
    for (const team in gameObject){
        const players = gameObj[team].players;
        for (const player in players) {
            if (player === playerName) {
                return players[player].points;
            }
        }
    }
  
}
function shoeSize(playerName) {
    const gameObj = gameObject();

    for (const team in gameObj) {
        const players = gameObj[team].players;
        if (playerName in players) {
            return players[playerName].shoe;
        }
    }

}
function teamColors(teamName) {
    const gameObj = gameObject();

    for (const team in gameObj) {
        if (gameObj[team].teamName === teamName) {
            return gameObj[team].colors;
        }
    }

    
}
function teamNames(teamName) {
    const gameObj = gameObject();

    for (const team in gameObj) {
        if (gameObj[team].teamName === teamName) {
            return gameObj[team].teamName;
        }
    }
}
function playerNumbers(teamName) {
    const gameObj = gameObject();
    const team = gameObj.home.teamName === teamName ? "home" : "away";

    const playerNumbersArray = Object.values(gameObj[team].players).map(player => player.number);
    return playerNumbersArray;
}
function playerStats(playerName) {
    const gameObj = gameObject();

    for (const team in gameObj) {
        const players = gameObj[team].players;
        if (playerName in players) {
            return players[playerName];
        }
    }
}
function bigShoeRebounds() {
    const gameObj = gameObject();

    let largestShoeSize = -1; 
    let playerWithLargestShoeSize = null;

    for (const team in gameObj) {
        const players = gameObj[team].players;
        for (const player in players) {
            if (players[player].shoe > largestShoeSize) {
                largestShoeSize = players[player].shoe;
                playerWithLargestShoeSize = player;
            }
        }
    }

    if (playerWithLargestShoeSize !== null) {
        return gameObj.home.players[playerWithLargestShoeSize].rebounds;
    } else {
        return "No player found";
    }
}
