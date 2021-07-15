package main
import "fmt"

func main(){
	var n, k, input int
	fmt.Scan(&n, &k)
	sum := 0
	for i := 0 ; i < n ; i ++ {
		fmt.Scan(&input)
		if (k - input > input) {
			sum += input * 2
		} else {
			sum += (k - input) * 2
		}
	}
	fmt.Println(sum)
}
