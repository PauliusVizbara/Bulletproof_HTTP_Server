import {RequestListener} from 'http'
import loaders from './loaders'

const startServer = async () => {
    const app: RequestListener = (req, res) => { }
    await loaders(app)
}

startServer()
