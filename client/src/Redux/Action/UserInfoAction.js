export const ADD_CURRENT_USER_INFO = 'ADD_CURRENT_USER_INFO'

export const addCurrentUser = (currentUser) => {
    return {
        type: ADD_CURRENT_USER_INFO,
        userInfo: currentUser
    }
}