export type Book = {
    title: String,
    pageCount: Number,
    authors: String[]
}

export default class {
    public title
    public  pageCount
    public  authors

    constructor(data) {
        this.title = data.title
        this.pageCount = data.title
        this.authors = data.authors
    }
}
