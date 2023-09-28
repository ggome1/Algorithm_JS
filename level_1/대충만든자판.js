function solution(keymap, targets) {
    var answer = [];
    var keyArr = {};
    keymap.forEach(eleKey => {
        for (let i = 0; i < eleKey.length; i++)
        {
            if (keyArr[eleKey[i]] == undefined || keyArr[eleKey[i]] > i + 1)
                keyArr[eleKey[i]] = i + 1;
        }
    });
    targets.forEach(eleTar => {
        var sum = 0;
        eleTar.split("").forEach(alphabet => {
            sum += keyArr[alphabet];
        })
        if (isNaN(sum))
            sum = -1;
        answer.push(sum);
    })
    return answer;
}