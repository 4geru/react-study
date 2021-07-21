package main
import (
	"fmt"
)

func rank(a []int, now int) (value int) {
	var result = 0
	for _, v := range a {
		if (v >= now) {
			result += 1
		}
	}
	return result
}

func main(){
	var a = make([]int, 3)
	for i := 0 ; i < 3 ; i ++ {
		fmt.Scan(&a[i])
	}
	for i := 0 ; i < 3 ; i ++ {
		fmt.Println(rank(a, a[i]))
	}
}
