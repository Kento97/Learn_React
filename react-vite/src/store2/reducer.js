//定义默认状态
const defaultState = {
    num: 1
}
//导出 reducer函数
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "addNum":
            newState.num += action.value;
            break;
        default:
            break;
    }
    return newState;
}