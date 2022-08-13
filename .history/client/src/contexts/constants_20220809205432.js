export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:500/api'
        : 'somedeployedURL'