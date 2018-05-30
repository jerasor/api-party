import React, { Component } from 'react'

import './GoogleSearch.css'

class GoogleSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: {
        items: []
      }
    }

    this.fetchsearchData(props)
  }

  componentWillReceiveProps = (newProps) => {
    const locationChanged = newProps.location.pathname !== this.props.location.pathname
    if (locationChanged) {
      this.fetchsearchData(newProps)
    }
  }

  fetchsearchData = (props) => {
    fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDv0kBZZFUmtJK8-G_cS9myPjXPHc5VNTI&cx=001914932319504676625:x16q1stbpv4&q=${props.match.params.searchTerm}`)
      .then(response => response.json())
      .then((search) => 
        this.setState({ search })
      )
  }

  render() {
    const { search } = this.state
    return (
      <div className="GoogleSearch">
        {search.items.map( (i) => {
          console.log(i)
          return(
            <div key={i.title}>
              {
                i.pagemap.cse_image &&
                  <img src={i.pagemap.cse_image[0].src} alt=""/>
              }
              <h3 className="searchTitle">{i.title}</h3>
              <h4 className="searchSnippet">{i.snippet}</h4>
              <a href={i.link}>Visit {i.link}</a>
              <hr />
            </div>
          )
        }
        )}
      </div>
    )
  }
}

export default GoogleSearch
