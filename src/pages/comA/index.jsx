import React from 'react'

import { connect } from 'react-redux'

class ComA extends React.Component {
    handleClick = () => {
        this.props.getUser()
    }
    render () {
        console.log('ComA', this.props)
        return (
            <>
                <button onClick={this.handleClick}>发送action， 获取用户信息</button>
                <br/>
                用户信息：
                <div>姓名：{this.props.userName}</div>
                <div>年龄：{this.props.age}</div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return Object.assign({}, state.user)
}
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch({
                type: 'get_users'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComA)