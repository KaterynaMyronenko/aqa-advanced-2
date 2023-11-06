import { Book } from './task1.js'

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year)
        this.format = format
    }
    printInfo() {
        console.log(this._name, this._author, this._year, this.format)
        return { name: this._name, author: this._author, year: this._year }
    }

    static concatClasses(book, format) {
        return { ...book, format }
    }
}
