function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => {
        if (a > b) return -1;
        else if (a === b) return 0;
        else return 1;
    });

    for (let i = m - 1; i < score.length; i += m)
        answer += score[i] * m;
    return answer;
}