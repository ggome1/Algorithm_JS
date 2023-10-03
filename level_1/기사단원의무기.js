function solution(number, limit, power) {
    var answer = 1;
    var a = [];
    for (let i = 2; i <= number; i++)
    {
        var count = 0;
        var numSqrt = Math.sqrt(i);
        for (let j = 1; j <= numSqrt; j++)
            if (i % j == 0)
            {
                if (i / j == j) count++;
                else count += 2;
            }
        if (count > limit)
            count = power;        
        answer += count;
        a.push(count);
    }
    return answer;
}


