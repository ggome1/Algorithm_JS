function solution(wallpaper) {
    var answer = [];
    let minY = wallpaper.findIndex((yCoord) => yCoord.includes('#'));
    let maxY;

    for (let i = wallpaper.length - 1; i >= 0; i--)
    {
        if (wallpaper[i].includes('#'))
        {
            maxY = i + 1;
            break;
        }
    }
    let minX = 50, maxX = 0;

    wallpaper.forEach(element => {
        let temp = element.indexOf('#');
        if (temp != -1 && temp < minX) minX = temp;
        temp = element.lastIndexOf('#');
        if (temp != -1 && temp >= maxX) maxX = temp + 1;
    });

    answer.push(minY);
    answer.push(minX);
    answer.push(maxY);
    answer.push(maxX);
    return answer;
}