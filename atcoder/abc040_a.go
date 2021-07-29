package main
import (
	"fmt"
)

func solve(a int, b int) (value int) {
	if(b - 1 > a - b){
		return a - b
	} else {
		return b - 1
	}
}

func main(){
	var a, b int
	fmt.Scan(&a, &b)
	fmt.Println(solve(a, b))
}
