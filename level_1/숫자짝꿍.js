solution("100", "2345");

function solution(X, Y) {
    var answer = '';
    var answerObj = {};
    X = X.split("").sort((a, b) => b - a);
    Y = Y.split("");
    Y.forEach(element => {
        if (answerObj[element] === undefined) {
            answerObj[element] = 1;
        } else {
            answerObj[element] ++;
        }
    });
    X.forEach(element => {
        if (answerObj[element] !== undefined && answerObj[element] !== 0) {
            answerObj[element] --;
            answer = answer.concat(element);
        }
    })
    if (answer === '') {
        return '-1';
    }
    if (answer[0] === '0') {
        return "0";
    }
    return answer;
}