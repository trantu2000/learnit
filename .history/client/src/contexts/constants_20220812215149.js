export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'somedeployedURL'

export const LOCAL_STORAGE_TOKEN_NAME = 'learnit-mern'


export const POST_LOADED_SUCCESS = 'POST_LOADED_SUCCESS'

export const POST_LOADED_FAIL = 'POST_LOADED_FAIL'