function solution(s) {
    var answer = [-1];
    for (let i = 1; i < s.length; i++)
    {
        var where = s.lastIndexOf(s[i], i - 1)
        if (where != -1)
            where = i - where
        answer.push(where);
    }
    console.log(answer);
    return answer;
}