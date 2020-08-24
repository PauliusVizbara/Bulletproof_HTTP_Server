const mockedBook = {
    title: "What even is this book?!",
    isbn: "584964165146",
    pageCount: 416,
    id: 69423
}

jest.mock('../database', () => ({
    __esModule: true,
    books: {list: jest.fn(() => Array(10).fill(mockedBook))},
}))

import {getBooksList} from '../services'
test('fetch books list', async () => expect(await getBooksList()).toMatchObject(Array(10).fill(mockedBook)))
