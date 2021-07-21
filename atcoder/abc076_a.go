package main
import (
	"fmt"
)

func solve(r int, g int) (value int) {
	return g + g - r
}

func main(){
	var r, g int
	fmt.Scan(&r, &g)
	fmt.Println(solve(r, g))
}
