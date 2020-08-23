import {RequestListener} from 'http'
import loaders from './loaders'
import {router} from './api'

const startServer = async () => {

    const app = router.serve
    await loaders(app)
}

startServer()
