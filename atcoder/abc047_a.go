package main

import (
	"fmt"
	"sort"
)

func main() {

	var a = make([]int, 3)
	for i := 0; i < 3; i++ {
		fmt.Scan(&a[i])
	}
	b := sort.IntSlice(a)

	for i := 0; i < 3; i++ {
		fmt.Println(b[i])
	}
	if a[0]+a[1] == a[2] {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}

}
