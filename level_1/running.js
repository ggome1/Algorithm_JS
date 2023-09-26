function solution(players, callings) {
    const playerMap = {};
    
    players.forEach((playerName, index) => {
        playerMap[playerName] = index;
    });
    
    callings.forEach((callingPlayer) => {
        let index = playerMap[callingPlayer];
        playerMap[callingPlayer] -= 1;
        playerMap[players[index - 1]] += 1;
        [players[index - 1], players[index]] = [players[index], players[index - 1]];
    });
    return players;
}