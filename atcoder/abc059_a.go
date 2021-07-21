package main
import (
	"fmt"
	"strings"
)

func solve(a string, b string, c string) (value string) {
	return strings.ToUpper(string(a[0]) + string(b[0]) + string(c[0]))
}

func main(){
	var a, b, c string
	fmt.Scan(&a, &b, &c)
	fmt.Println(solve(a, b, c))
}
