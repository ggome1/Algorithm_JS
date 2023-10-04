function solution(food) {
    var answer = [];
    var first = [];
    var second = [];

    for (let i = 1; i < food.length; i++)
        for (let j = 0; j < parseInt(food[i] / 2); j++)
            first.push(i);
    second = [...first].reverse();
    answer = [...first, 0, ...second];
    return answer.join("");
}