export class MyArray {

    array: Array<Number>;
    elements: number;

    constructor(size: Number) {
        this.array = new Array<Number>(size)
        this.elements = 0;
    }

    insert(value: Number) {
        this.array[this.elements] = value;
        this.elements++;
    }

    find(value: Number): boolean {
        let index;
        for (index = 0; index < this.array.length; index++) {
            if (this.array[index] === value) {
                break;
            }
        }
        if (index === this.elements) {
            return false;
        }
        return true;
    }

    delete(value: Number): boolean {
        let index;
        for (index = 0; index < this.array.length; index++) {
            if (this.array[index] === value) {
                break;
            }
        }
        if (index === this.elements) {
            return false;
        }
        let indexToMove;
        for (indexToMove = index; indexToMove < this.elements; indexToMove++) {
            this.array[indexToMove] = this.array[indexToMove + 1];
        }
        this.elements--;
        return true;
    }

    display() {
        for (let index = 0; index < this.array.length; index++) {
            console.log(this.array[index]);
        }
    }

}