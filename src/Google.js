import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Google.css'
import GoogleSearch from './GoogleSearch'

class Google extends Component {
  state = {
    search: '',
  }

  handleChange = (ev) => {
    this.setState({ search: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/google/${this.state.search}`)
  }

  render() {
    return (
      <div className="Google">
        <img
          src="http://photos1.blogger.com/blogger/3087/1154/1600/googlegooooooogle.jpg"
          alt="Google"
          className="logo"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Perform a Google Search</button>
          </div>
        </form>
        <Route path="/google/:searchTerm" component={GoogleSearch} />
        <Route exact path="/google" render={() => <h3>Please enter a term to search on Google.</h3>} />
      </div>
    )
  }
}

export default Google
