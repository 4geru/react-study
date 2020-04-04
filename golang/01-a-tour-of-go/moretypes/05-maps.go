package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])

	m = map[string]Vertex{
		"Bell Labs": Vertex{
			40.68433, -74.39967,
		},
		// 型を書かなくても自明なので、省略できる
		"Google": {
			37.42202, -122.08408,
		},
	}

	fmt.Println(m)

	fmt.Println(" === mutating maps ===")
	n := make(map[string]int)

  n["Answer"] = 42
  fmt.Println("The value:", n["Answer"])

  n["Answer"] = 48
  fmt.Println("The value:", n["Answer"])

  delete(n, "Answer")
  fmt.Println("The value:", n["Answer"])

  v, ok := n["Answer"]
  fmt.Println("The value:", v, "Present?", ok)
}
