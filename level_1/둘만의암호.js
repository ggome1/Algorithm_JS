function solution(s, skip, index) {
    var answer = '';
	var alphabet = [];

	for (let i = 0; i < 26; i++)
		alphabet.push(String.fromCharCode(('a'.charCodeAt() + i)));
	for (let i = 0; i < skip.length; i++)
		alphabet.splice(alphabet.indexOf(skip[i]), 1);
	for (let i = 0; i < s.length; i++)
	{
		var location = alphabet.indexOf(s[i]);
		answer = answer + alphabet[(location + index) % (26 - skip.length)];
	}
    return answer;
}