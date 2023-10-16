function solution(numbers) {
    var answer = 45;

	numbers.forEach(element => {
		answer -= element;
	});
    return answer;
}