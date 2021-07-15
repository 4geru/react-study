package main
import "fmt"

func main(){
	var n, input int
	fmt.Scan(&n)
	sum := 0
	for i := 0 ; i < n ; i ++ {
		fmt.Scan(&input)
		if (input > 10) {
			sum += input - 10
		}
	}
	fmt.Println(sum)
}
