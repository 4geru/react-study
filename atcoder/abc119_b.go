package main
import (
	"fmt"
)

const BTC_PER_JPY = 380000.0

func to_JPY(a float64) (float64) {
	return a * BTC_PER_JPY
}

func main(){
	var n int
	var input float64
	var u string
	var sum = 0.0
	fmt.Scan(&n)

	for i := 0 ; i < n ; i ++ {
		fmt.Scan(&input, &u)
		if (u == "JPY") {
			sum += input
		} else {
			sum += to_JPY(input)
		}
	}
	fmt.Println(sum)
}
