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
        let index: number;
        for (index = 0; index < this.elements; index++) {
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
        let index: number;
        for (index = 0; index < this.elements; index++) {
            if (this.array[index] === value) {
                break;
            }
        }
        if (index === this.elements) {
            return false;
        }
        let indexToMove: number;
        for (indexToMove = index; indexToMove < this.elements; indexToMove++) {
            this.array[indexToMove] = this.array[indexToMove + 1];
        }
        this.elements--;
        return true;
    }

    display() {
        for (let index = 0; index < this.elements; index++) {
            console.log(this.array[index]);
        }
    }

    size() : number {
        return this.elements;
    }

}