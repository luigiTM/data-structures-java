export class MyArray {

    array: Array<number>;
    elements: number;

    constructor(size: number) {
        this.array = new Array<number>(size)
        this.elements = 0;
    }

    insert(value: number) {
        this.array[this.elements] = value;
        this.elements++;
    }

    find(value: number): boolean {
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

    delete(value: number): boolean {
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