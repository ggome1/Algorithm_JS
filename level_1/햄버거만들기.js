solution([2, 1, 1, 2, 3, 1, 2, 3, 1]);
function solution(ingredient) {
    var answer = 0;
    var stack = [];

    ingredient.forEach(element => {
        stack.push(element);

        if (stack.length >= 4) {
            var find = stack.slice(-4).join("");
            if (find == "1231") {
                let i = 4;
                while (i--) {
                    stack.pop();
                }
                answer++;
            }
        }
    });
    return answer;
}