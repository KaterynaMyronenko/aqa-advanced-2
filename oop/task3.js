import { Book } from './task1.js'
import { EBook } from './task2.js'

const book1 = new Book('IT', 'S.King', 1986)
const book2 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1937)
const book3 = new Book('Pride and Prejudice', 'Jane Austen.', 1813)
book1.printInfo()
book2.printInfo()
book3.printInfo()

const book4 = new EBook('IT', 'S.King', 1986, 't')
book4.printInfo()

Book.oldestBook([book1, book2, book3, book4])
EBook.concatClasses(book2, 'txt')
console.log(EBook.concatClasses(book2, 'txt'))
