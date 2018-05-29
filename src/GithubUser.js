import React, { Component } from 'react'

import './GithubUser.css'

class GithubUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData(props)
  }

  componentWillReceiveProps = (newProps) => {
    const locationChanged = newProps.location.pathname !== this.props.location.pathname
    if (locationChanged) {
      this.fetchUserData(newProps)
    }
  }

  fetchUserData = (props) => {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state
    return (
      <div className="GithubUser">
        <img src={user.avatar_url} alt=""/>
        <h2>{user.login}</h2>
        <h3>followers: {user.followers}</h3>
        <h3>following: {user.following}</h3>
        <h3>location: {user.location}</h3>
        <a href={user.html_url} target="_blank">Link to {user.login}'s profile</a>
      </div>
    )
  }
}

export default GithubUser
