package main
import (
	"fmt"
)

func main(){
	var n, m, c, input int
	var ret = 0
	fmt.Scan(&n, &m, &c)
	var b = make([]int, m)
	for i := 0 ; i < m ; i ++ {
		fmt.Scan(&b[i])
	}


	for i := 0 ; i < n ; i ++ {
		var sum = 0
		for j := 0 ; j < m ; j ++ {
			fmt.Scan(&input)
			sum += input * b[j]
		}

		if (sum + c > 0) {
			ret ++
		}
	}
	fmt.Println(ret)
}
