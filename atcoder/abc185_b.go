import (
	"fmt"
)

func sub(now int, sub int, judge bool) (_sub int, _judge bool) {
	if now-sub <= 0 {
		_judge = false
	}
	return now - sub, judge && _judge
}

func main() {
	var n, m, t, a, b int

	fmt.Scan(&n, &m, &t)
	dead := false
	now := n
	time := 0

	for i := 0; i < m; i++ {
		fmt.Scan(&a, &b)
		// sub
		now, dead = sub(now, a-time, dead)

		// add
		now += (b - a)
		if now > n {
			now = n
		}

		time = b
	}
	// sub
	now -= (t - time)
	if now <= 0 {
		dead = true
	}

	if dead {
		fmt.Println("No")
	} else {
		fmt.Println("Yes")
	}
}
