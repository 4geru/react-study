package main

import "fmt"

func main() {
	a := 0
  for i := 0; i < 10; i++ {
    a += i
  }
  fmt.Println(a)

  b := 1
  for ; b < 1000; {
    b += b
  }
  fmt.Println(b)

  var c int = 0
  // 永久ループ
  for {
  	c += 1
  	fmt.Println(c)
  	if c == 3 {
  		break
  	}
  }
}
