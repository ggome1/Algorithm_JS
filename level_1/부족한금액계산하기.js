function solution(price, money, count) {
	while (count) {
		money -= price * count--;		
	}	
    return money < 0 ? -money : 0;
}