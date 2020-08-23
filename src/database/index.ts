import fetch from 'node-fetch'

const baseUrl = 'http://localhost:3000/'

const defaultRequestOptions = {
    method: 'GET',
}

export const databaseRequest = async (url, method = 'GET', body = undefined) => {

    const options = {...defaultRequestOptions, method, headers: {}, body: undefined}

    if (body) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    const response = await fetch(baseUrl + url, options)
    return await response.json()
}

export * from './books'
