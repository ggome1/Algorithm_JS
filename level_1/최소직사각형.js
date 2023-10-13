function solution(sizes) {
    var answer = 0;
    var maxX = 0, maxY = 0;
    sizes.forEach(element => {
        var tempX = Math.max(element[0], element[1]);
        var tempY = Math.min(element[0], element[1]);
        maxX = Math.max(maxX, tempX);
        maxY = Math.max(maxY, tempY);
    });
    answer = maxX * maxY;
    return answer;
}