solution(8, 4, [2, 3, 6]);

function solution(n, m, section) {
    var answer = 0;
    var curNum = section[0];
    var curIndex = 0;
    
    while(curNum <= Number(section[section.length - 1]))
    {
        if (section[curIndex] < curNum)
            curIndex++;
        else if (curNum == section[curIndex])
        {
            answer++;
            curNum += m;
            curIndex++;
        }
        else curNum++;
    }
    return answer;
}