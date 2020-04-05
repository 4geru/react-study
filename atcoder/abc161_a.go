package main
 
import "fmt"
 
func ExchangeNumber(x, y ,z int) (int, int, int) {
	tmp := x
	x = y
	y = tmp
	tmp = x
	x = z
	z = tmp
	return x, y, z
}
 
func main()  {
	var x, y, z int
	fmt.Scan(&x, &y, &z)
	fmt.Println(ExchangeNumber(x, y, z))
}
