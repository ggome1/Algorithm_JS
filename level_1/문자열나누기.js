function solution(s) {
    var answer = 0;
    var index = 0;
	while (index < s.length)
	{
		var x = s[index];
		var xCount = 0, othersCount = 0;

		while (index < s.length)
		{
			if (s[index] == x)
				xCount++;
			else
				othersCount++;
			if (xCount == othersCount)
			{
				answer++;
				break;
			}
			index++;
		}
		if (xCount != othersCount)
			answer++;
		index++;
	}
    return answer;
}