import { books } from '../database'

export const getBooksList = async () => await books.list()
