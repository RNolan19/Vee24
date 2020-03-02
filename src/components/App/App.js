import React from 'react'
import { Route } from 'react-router-dom'
// import Home from '../Home'
import Header from '../Header/Header'
import ListAlbums from '../ListAlbums'
import Album from '../Album'

class App extends React.Component {
  render () {
    return (
      <div className="body">
        <Header />
        <Route path="/album/:id/" component={Album}/>
        <Route exact path="/" component={ListAlbums}/>
        <Route exact path="/list" component={ListAlbums} />
      </div>
    )
  }
}

export default App
