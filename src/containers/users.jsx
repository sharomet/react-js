import React from 'react'
import { connect } from 'react-redux'
import { addUser, removeUser, editUser } from '../actions/actionUsers'

class Users extends React.Component {

    state = {
        userName: '',
        userId: ''
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

    editUser = (event, id) => {
        event.preventDefault();
        const { users } = this.props;
        this.setState({
            userName: [...users].filter(user => user.id === id)[0].name,
            userId: id
        })
    }

    changeUser = () => {
        const { editUser } = this.props
        const { userName, userId } = this.state
        editUser(userId, userName)
        this.setState({
            userName: ''
        })
    }

    render() {
        const { userName } = this.state;
        const { users, removeUser } = this.props
        const isUsersExist = users && users.length > 0
        return (
            <>
                <form onSubmit={ this.addUser }>
                    <input
                        type="text"
                        onChange={ this.handleInputChange }
                        value={ userName }/>
                    <button type="submit">
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={ this.changeUser }>
                        Edit
                    </button>
                </form>
                <ul>
                    { isUsersExist && users.map(({ id, name }) => <li key={ id }>
                        { name }
                        <a href="/#"
                           onClick={ event => this.editUser(event, id) }
                           className="edit">
                            Edit
                        </a>
                        <span
                            onClick={ () => removeUser(id) }
                            className="remove">
                            Remove
                        </span>
                    </li>) }
                </ul>
            </>
        )
    }
}

export default connect(state => ({
    users: state.users,
}), { addUser, removeUser, editUser })(Users);