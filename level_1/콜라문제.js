solution(3, 1, 20);

function solution(a, b, n) {
    var answer = 0;
    var rest;

    while (n >= a) {
        answer += Math.floor(n / a) * b;
        rest = n % a;
        n = (Math.floor(n / a) * b) + rest;
    }
    console.log(answer);
    return answer;
}
