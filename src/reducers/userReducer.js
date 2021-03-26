const userData = {
    userName: '张三',
    age:18
}

export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'get_users':
            return Object.assign({}, userData)
        default:
            return state
    }
}