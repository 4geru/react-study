package main
import (
	"fmt"
)

func turn(str string) (next string, index int) {
	return str[1:], int(str[0] - 'a')
}

func main(){
	var players = make([]string, 3)
	for i := 0 ; i < 3 ; i ++ {
		fmt.Scan(&players[i])
	}
	var now = 0
	for {
		if(players[now] == "") {
			break
		}
		players[now], now = turn(players[now])
	}
	fmt.Println(string(now + 'A'))
}
