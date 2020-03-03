import React from 'react'
import { Route } from 'react-router-dom'
// import Home from '../Home'
import Header from '../Header/Header'
import ListAlbums from '../ListAlbums'

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <Header />
        <Route exact path="/" component={ListAlbums}/>
      </div>
    )
  }
}

export default App
