package main
import (
	"fmt"
)

func main(){
	var h = make([]int, 1000)
	for i := 1 ; i < 1000 ; i ++ {
		h[i] = h[i - 1] + i
	}

	var a, b int
	fmt.Scan(&a, &b)
	
	for i := 1 ; i < 999 ; i ++ {
		if (h[i + 1] - b == h[i] - a) {
			fmt.Println(h[i + 1] - b)
			break
		}
	}
}
