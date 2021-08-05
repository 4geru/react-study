package main
import (
	"fmt"
	"strings"
	"strconv"
)

func isModThreeIsZero(number int) (bool) {
	return number % 3 == 0
}

func isIncludeTheree(number int) (bool) {
	return strings.Contains(strconv.Itoa(number), "3")
}

func main(){
	var input int
	fmt.Scan(&input) 
	if (isModThreeIsZero(input) || isIncludeTheree(input)) {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}
}
