import { ADD_CURRENT_USER_INFO } from '../Action/UserInfoAction'
const currentUserInfoState = {
    currentUserInfo: {}
}

export const userInfoReducer = (state = currentUserInfoState, action) => {
    switch (action.type) {
        case ADD_CURRENT_USER_INFO:
            return {
                currentUserInfo: {
                    ...action.userInfo
                }
            }
        default:
            return state
    }
}