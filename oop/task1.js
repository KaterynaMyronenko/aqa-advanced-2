export class Book {
    constructor(name, author, year) {
        this._name = name
        this._author = author
        this._year = year
    }
    printInfo() {
        console.log(this._name, this._author, this._year)
        return { name: this._name, author: this._author, year: this._year }
    }
    static oldestBook(array) {
        let counter = 0
        let result
        for (const book of array) {
            if (counter === 0) {
                counter = book._year
            } else if (counter > book._year && counter != 0) {
                counter = book._year
            }
        }
        for (const book of array) {
            if (book._year === counter) {
                result = book
            }
        }
        console.log(result)
    }
}
