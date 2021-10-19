import React, { Component } from 'react'

class UserItem extends Component {


    
        state = {
            id: "id",
            login: "mujumbo",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            url: "https://api.github.com/users/mojombo"
        }

    
    
    render() {
        const { id, login, avatar_url, url } = this.state;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px' }}/>
                <h3>{login}</h3>

                <div>
                    <a href={url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
