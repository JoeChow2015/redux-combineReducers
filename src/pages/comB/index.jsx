import React from 'react'

import { connect } from 'react-redux'

class ComB extends React.Component {
    handleClick = () => {
        this.props.getProList()
    }
    renderList = () => {
        if (!this.props.proList) return
        return this.props.proList.map(item => {
            return (
                <div key={item.name}>
                    <div>名称：{item.name}</div>
                    <div>价格：{item.price}</div>
                </div>
            )
        })
    }
    render () {
        console.log('ComB', this.props)
        return (
            <>
                <button onClick={this.handleClick}>发送action， 获取列表信息</button>
                <br/>
                商品列表：
                {this.renderList()}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return Object.assign({}, state.pro)
}
const mapDispatchToProps = dispatch => {
    return {
        getProList: () => {
            dispatch({
                type: 'get_proList'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComB)