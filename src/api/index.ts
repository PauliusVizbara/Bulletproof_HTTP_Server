import {Router, EndpointMatcher, ExactUrlPathnameMatcher} from "@bessonovs/node-http-router";
import {getBooksList} from "../services";

export const router = new Router((req, res) => {
    res.statusCode = 404;
    res.end()
})

router.addRoute({
    matcher: new EndpointMatcher('GET', /\/books/),
    handler: async (req, res) => {
        //TODO: Get the list of books
        const booksList = await getBooksList()
        res.write(JSON.stringify(booksList))
        res.end()
    },
})

router.addRoute({
    matcher: new EndpointMatcher('POST', /\/books/),
    handler: (req, res, match) => {
        //TODO: Add a new book
    },
})

router.addRoute({
    matcher: new EndpointMatcher<{ groups: { id: string } }>('GET', /^\/books\/(?<id>[^/]+)$/),
    handler: (req, res, match) => {
        console.log(match.match.groups.id)
        //TODO: Get book by id
    },
})

router.addRoute({
    matcher: new EndpointMatcher<{ groups: { id: string } }>('PUT', /^\/books\/(?<id>[^/]+)$/),
    handler: (req, res, match) => {
        console.log(match.match.groups.id)
        //TODO: Update book by id
    },
})

