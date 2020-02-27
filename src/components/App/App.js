import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'
import Header from '../Header/Header'
import ListAlbums from '../ListAlbums'
import Album from '../Album'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies/:id" component={Album}/>
        <Route exact path="/list" component={ListAlbums} />
      </div>
    )
  }
}

export default App
