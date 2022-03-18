import {connect} from 'react-redux'

const Child = ({num, accumulate}) => {
    return (
        <>
            <div>数字为{num}</div>
            <button onClick={() => {
                accumulate()
            }}>累加
            </button>
        </>
    )
}
//state 是reducer返回出来的 state;(状态映射)
const mapStateToProps = (state) => ({
    num: state.num
})


//事件派发映射,将 reducer 中的事件映射为props
//比如：props.accumulate()实现 num 的累加
const mapDispatchToProps = (dispatch) => {
    return {
        accumulate() {
            const action = {type: "addNum",value:2}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child)