package main
import (
	"fmt"
	"strconv"
	"math"
)

const NUM = 753

func judge(num float64) (float64) {
	return math.Abs(NUM - float64(num))
}

func main(){
	var input string
	var min = 1000.0

	fmt.Scan(&input)
	for i := 0 ; i < len(input) - 2 ; i ++ {
		var num, _ = strconv.ParseFloat(input[i:i+3], 64)
		min = math.Min(min, judge(num))
	}
	fmt.Println(int(min))
}
