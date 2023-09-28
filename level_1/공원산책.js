function solution(park, routes) {
    var answer = [];
    var move = {'N': [-1, 0], 'S': [1, 0], 'W': [0, -1], 'E': [0, 1]};
    let y = park.findIndex((exist) => exist.includes('S'));
    let x = park[y].indexOf('S');
    
    routes.forEach((order) => {
        let distance = Number(order[2]);
        let direction = order[0];
        let tempX = x, tempY = y, flag = 0;

        for (let i = 0; i < distance; i++)
        {
            tempY += move[direction][0];
            tempX += move[direction][1];

            if (tempX < 0 || tempX >= park[0].length || tempY < 0 || tempY >= park.length
                || park[tempY][tempX] == 'X')
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            x = tempX, y = tempY;
    });
    answer.push(y, x);
    return answer;
}