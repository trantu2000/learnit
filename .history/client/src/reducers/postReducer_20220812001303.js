export const postReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'POST_LOADED_SUCCESS':
            return {
                ...state,
                posts: payload,
                postsLoading
            }
        default:
            return state
    }
}