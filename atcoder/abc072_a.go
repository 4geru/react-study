package main
import (
	"fmt"
)

func solve(a int, b int) (value int) {
	if(a - b > 0) {
		return a - b
	} else {
		return 0
	}
}

func main(){
	var a, b int
	fmt.Scan(&a, &b)

	fmt.Println(solve(a, b))
}
