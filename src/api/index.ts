import {Router, EndpointMatcher, ExactUrlPathnameMatcher} from "@bessonovs/node-http-router";

export const router = new Router((req, res) => {
    res.statusCode = 404;
    res.end()
})

router.addRoute({
    matcher: new EndpointMatcher('GET', /\/books/),
    handler: (req, res) => {
        //TODO: Get the list of books
    },
})

router.addRoute({
    // it's not necessary to type the matcher, but it give you a confidence
    matcher: new EndpointMatcher('POST', /\/books/),
    handler: (req, res, match) => {
        //TODO: Add a new book
    },
})

router.addRoute({
    // it's not necessary to type the matcher, but it give you a confidence
    matcher: new EndpointMatcher<{ groups: { id: string } }>('GET', /^\/books\/(?<id>[^/]+)$/),
    handler: (req, res, match) => {
        console.log(match.match.groups.id)
        //TODO: Get book by id
    },
})

router.addRoute({
    // it's not necessary to type the matcher, but it give you a confidence
    matcher: new EndpointMatcher<{ groups: { id: string } }>('PUT', /^\/books\/(?<id>[^/]+)$/),
    handler: (req, res, match) => {
        console.log(match.match.groups.id)
        //TODO: Update book by id
    },
})

