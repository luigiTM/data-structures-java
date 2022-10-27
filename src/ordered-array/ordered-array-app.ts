import { OrderedArray } from "./ordered-array";

var orderedArray = new OrderedArray(100);

orderedArray.insert(77);
orderedArray.insert(99);
orderedArray.insert(44);
orderedArray.insert(55);
orderedArray.insert(22);
orderedArray.insert(88);
orderedArray.insert(11);
orderedArray.insert(0);
orderedArray.insert(66);
orderedArray.insert(33);

orderedArray.display();

if (orderedArray.find(44) !== -1) {
    console.log("Found")
} else {
    console.log("Not found")
}

orderedArray.delete(0)
orderedArray.delete(55)
orderedArray.delete(99)

orderedArray.display();