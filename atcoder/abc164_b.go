package main
import (
	"fmt"
)

func battled(attack int, hp int) (int) {
	if (hp % attack != 0) {
		return hp / attack + 1
	} else {
		return hp / attack
	}
}

func main() {
	var ahp, a, bhp, b int
	fmt.Scan(&ahp, &a, &bhp, &b)
	for {
		bhp = bhp - a
		if(bhp <= 0) {
			fmt.Println("Yes")
			break
		}
		ahp = ahp - b
		if(ahp <= 0) {
			fmt.Println("No")
			break
		}
	}
}
