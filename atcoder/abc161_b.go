package main
 
import "fmt"
 
func CheckCounts(a []float64, size int, avg float64) (count float64) {
	for i := 0; i < size; i ++{
		if avg <= a[i]{
			count ++
		}
	}
	return
}

func main()  {
	var i, n int
	var sum, m float64
	sum = 0
	fmt.Scan(&n, &m)
	a := make([]float64, n)
	for i = 0; i < n; i++{
		fmt.Scan(&a[i])
		sum+=a[i]
	}

	if CheckCounts(a, n, sum * 1 / (4 * m)) < m{
		fmt.Println("No")
	}else{
		fmt.Println("Yes")
	}
}
