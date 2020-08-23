import { books } from '../database'
import {Book} from '../models'

export const getBooksList = async () => await books.list()
