//循环与递归，计算从1加到10的和
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < 11; i++) {
	sum1 = sum1 + i;
}
function Sum(n) {
	if (n>0) {
		sum2 = sum2 + n;
		Sum(n-1);
	}
}
Sum(10);
console.log(sum1==sum2);//true