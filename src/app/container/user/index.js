import React, { Component } from 'react'

const styleObj = {
    width: '72%',
    border: 'solid 1px black',
    height: '25%',
    background: '#ddd',
    'margin-left': '9%',
    display: 'flex',
    padding: '15px'
}
class User extends Component {

    render() {
        const item = this.props.item
        return (
            <div style={styleObj}>
                <img src={item.avatar_url} />
                <div>USER</div>
                <div>USER</div>
            </div>
        )
    }
}

User.propTypes = {}

User.defaultProps = {}

export default User
