import React from 'react'
import { NavLink } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>This is the homepage</h1>
        <NavLink to="/list"> **See Top 100 Albums**</NavLink>
      </div>
    )
  }
}

export default Home
