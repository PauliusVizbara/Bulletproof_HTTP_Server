import httpServerLoader from './httpServer'

export default async (app) => {
    await httpServerLoader(app)
    console.log('✓ HTTP server initialized')
}
