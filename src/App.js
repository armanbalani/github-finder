import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'
import Alert  from './components/layout/Alert'
class App extends Component {
  

  state = {
    users: [],
    loading: false,
    alert: null
  }

  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (message, type) => {
    this.setState( { alert: { message, type } } )
    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000);

  }


  searchUsers = async (text) => {
   this.setState({ loading: true })
   console.log(`https://api.github.com/users/search/?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
   const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
   console.log(res.data.items)
   this.setState({ loading: false, users: res.data.items})
  } 

  render () {

    const { loading, users } = this.state

    return (

      
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className="container">
          <Alert alert={ this.state.alert } />
          <Search 
          clearUsers={ this.clearUsers } 
          searchUsers={ this.searchUsers } 
          showClear={users.length > 0 }
          setAlert= {this.setAlert} />
          <Users loading={loading} users={users}/>
        </div>

      </div>
    )
  }
}

export default App
