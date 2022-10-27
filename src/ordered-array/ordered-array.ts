export class OrderedArray {

    array: Array<Number>;
    elements: number;

    constructor(size: Number) {
        this.array = new Array<Number>(size)
        this.elements = 0;
    }

    insert(value: Number) {
        let index: number;
        for (index = 0; index < this.elements; index++) {
            if (this.array[index] > value) {
                break;
            }
        }
        for (let indexToMove = this.elements; indexToMove > index; indexToMove--) {
            this.array[indexToMove] = this.array[indexToMove - 1]
        }
        this.array[index] = value;
        this.elements++;
    }

    find(value: Number): number {
        let lowerBound = 0;
        let upperBound = this.elements - 1;
        let index: number;
        while (true) {
            index = (lowerBound + upperBound) / 2;
            if (this.array[index] === value) {
                return index;
            } else if (lowerBound > upperBound) {
                return -1;
            } else {
                if (this.array[index] < value) {
                    lowerBound = index + 1;
                } else {
                    upperBound = index - 1;
                }
            }
        }
    }

    delete(value: Number): boolean {
        let elementIndex = this.find(value);
        if (elementIndex === -1) {
            return false;
        }
        for (let index = elementIndex; index < this.elements; index++) {
            this.array[index] = this.array[index + 1];
        }
        this.elements--;
        return true;
    }

    display() {
        for (let index = 0; index < this.elements; index++) {
            console.log(this.array[index]);
        }
    }

    size(): number {
        return this.elements;
    }

}