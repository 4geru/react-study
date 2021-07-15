// * 2分探索
// Twitter: https://twitter.com/e869120/status/1376665578513989633?s=20
// ためになる https://qiita.com/drken/items/97e37dd6143e33a64c8c
package main
import "fmt"

var N, K, L int
var A = make([]int, 1 << 18)

func solve(M int) bool {
	cnt := 0
	pre := 0

	for i := 1; i <= N; i ++ {
		if (A[i] - pre >= M && L - A[i] >= M) {
			cnt += 1
			pre = A[i]
		}
	}
	if(cnt >= K) {
		return true
	}
	return false
}

func main(){
	fmt.Scan(&N, &L, &K)
	for i := 1; i <= N; i ++ {
		fmt.Scan(&A[i])
	}

	var left = -1
	var right = L + 1

	for(right - left > 1) {
		var mid = left + (right - left) / 2
		if(solve(mid) == false) {
			right = mid
		} else {
			left = mid
		}
	}

	fmt.Println(left)
	return
}
