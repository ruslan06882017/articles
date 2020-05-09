import React,{Component} from 'react'

class UserForm extends Component {
    state = {
        username: ''
    }

    handleChange = e => {
        // console.log(e.target.value.length);
        if (e.target.value.length >= 10) {
             
            return this.setState({ username: '' });
        }
        this.setState({
            username: e.target.value
        })
    }

    render(){
        return(
            <div>
                User name
                <input
                    value={this.state.username} 
                    onChange={this.handleChange}
                />
            </div>           
        );
    }
}

export default UserForm