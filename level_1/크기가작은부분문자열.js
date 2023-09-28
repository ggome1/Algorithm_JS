solution("10203", "15");
function solution(t, p) {
    var count = 0;

    for(var i = 0; i < t.length - p.length + 1; i++)
        if (Number(t.slice(i, i + p.length)) <= Number(p))
            count++;
    return count;
}