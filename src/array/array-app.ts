import { MyArray } from "./my-array";

var myArray = new MyArray(15);

myArray.insert(1);
myArray.insert(2);
myArray.insert(3);
myArray.insert(4);
myArray.insert(5);
myArray.insert(6);
myArray.insert(7);
myArray.insert(8);
myArray.insert(9);
myArray.insert(10);

myArray.display();

if (myArray.find(5)) {
    console.log("Found")
} else {
    console.log("Not found")
}

myArray.delete(1)
myArray.delete(6)
myArray.delete(10)

myArray.display();