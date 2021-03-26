const proList = [
    {
        name: '衣服',
        price: '￥399.00'
    },
    {
        name: '裤子',
        price: '￥39.00'
    },
    {
        name: '鞋子',
        price: '￥99.00'
    },
    {
        name: '帽子',
        price: '￥399.00'
    }
]

export function proReducer(state = {}, action) {
    switch (action.type) {
        case 'get_proList':
            return {
                proList: [...proList]
            }
        default:
            return state
    }
}