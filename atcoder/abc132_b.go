package main
import (
	"fmt"
)

func main(){
	var n int
	var cnt = 0
	fmt.Scan(&n)
	var a = make([]int, n)
	fmt.Scan(&a[0])
	fmt.Scan(&a[1])
	for i := 2 ; i < n ; i ++ {
		fmt.Scan(&a[i])
		if (a[i-2] < a[i-1] && a[i-1] < a[i]) {
			cnt ++
		}
		if (a[i] < a[i-1] && a[i-1] < a[i-2]) {
			cnt ++
		}
	}
	fmt.Println(cnt)
}
