import {databaseRequest} from './index'
import {Book} from '../models'

const getBooksList = async (): Promise<Book[]> => await databaseRequest('books')

const getBook = async (id) => await databaseRequest(`books/${id}`)

const createBook = async (data): Promise<Book> => await databaseRequest(`books`, 'POST', data)

const updateBook = async (id, data): Promise<Book> => await databaseRequest(`books/${id}`, 'PUT', data)

export const books = {
    list: getBooksList,
    get: getBook,
    create: createBook,
    update: updateBook,
}
