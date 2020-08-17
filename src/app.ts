import {RequestListener} from 'http'
import loaders from './loaders'

const startServer = async () => {
    const app: RequestListener = (req, res) => {
        //TODO: CORS handling
        //TODO: Request parsing
        //TODO: Routing
            //TODO: Validation
            //TODO: Service calling
        //TODO: Error handling
    }
    await loaders(app)
}

//TODO: Error handling on failed server start (lower priority)
startServer()
