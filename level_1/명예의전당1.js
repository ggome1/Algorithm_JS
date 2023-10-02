function solution(k, score) {
    var answer = [];
    var curList = [];
    var index = 0;
    while (index < Math.min(k, score.length))
    {
        curList.push(score[index]);
        answer.push(Math.min(...curList));
        index++;
    }
    while (index < score.length)
    {
        var min = Math.min(...curList);
        if (score[index] > min)
        {
            curList.splice(curList.indexOf(min), 1);
            curList.push(score[index]);
        }
        answer.push(Math.min(...curList));
        index++;
    }
    return answer;
}