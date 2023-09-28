function solution(cards1, cards2, goal) {
    var answer = '';
    var index1 = 0;
    var index2 = 0;
    goal.forEach(element => {
        if (element == cards1[index1])
            index1++;
        else if (element == cards2[index2])
            index2++;
        else
        {
            answer = "No"
            return false;
        }
    });
    if (answer != "No")
        answer = "Yes";
    return answer;
}