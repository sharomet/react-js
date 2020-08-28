import React from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser } from '../actions/actionUsers'

class Users extends React.Component {

    state = {
        userName: ''
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            userName: value,
        })
    }

    addUser = (event) => {
        event.preventDefault()
        const { userName } = this.state
        if (userName.length > 0) {
            const { addUser } = this.props;
            addUser((new Date()).getTime(), userName);
            this.setState({
                userName: ''
            })
        }
    }

    render() {
        const { userName } = this.state;
        const { users, removeUser } = this.props
        const isUsersExist = users && users.length > 0
        return (
            <>
                <form onSubmit={ this.addUser }>
                    <input type="text" onChange={ this.handleInputChange } value={ userName }/>
                    <button type="submit">
                        Add
                    </button>
                </form>
                <ul>
                    { isUsersExist && users.map(({ id, name }) => <li key={ id }>
                        { name } <span onClick={() => removeUser(id)}>x</span>
                    </li>) }
                </ul>
            </>
        )
    }
}

export default connect(state => ({
    users: state.users,
}), { addUser, removeUser })(Users);