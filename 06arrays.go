package main

import "fmt"

func main() {
	//declare array
	//var arrayName =

	var scores = [4]int{88, 71, 53, 91}
	fmt.Println(scores)
	fmt.Println(len(scores))

	var lifes = [12]int{0: 8, 5: 9, 11: 88}
	fmt.Println((lifes))

	for index, value := range scores {
		fmt.Println("Index: ", index, "Value: ", value)
	}

	for value := range scores {
		fmt.Println("Value: ", value)
	}
}