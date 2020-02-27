import React from 'react'
import apiUrl from '../apiConfig'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ListAlbums extends React.Component {
  constructor () {
    super()
    this.state = {
      albums: []
    }
  }

  // Reset the state with the response data
  componentDidMount () {
    axios(apiUrl)
      .then(res => {
      // console.log res to see the response data
        console.log(res.data.feed.entry)
        // setState is just a React variable
        // Update state with the movie ResponseData
        this.setState({ albums: res.data.feed.entry })
      })
      .catch(console.error)
  }

  render () {
    let movieJsx = ''
    if (this.state.albums.length === 0) {
      movieJsx = 'Loading...'
    } else {
      movieJsx = this.state.albums.map(album => (
        <li key={album.title['label']}>
          <Link to={`/movies/${album.title['label']}`}>{album.title['label']}</Link>
        </li>
      ))
    }

    return (
      <div>
        <h1>Top 100 Albums Go Here!</h1>
        <ul>
          {movieJsx}
        </ul>
      </div>
    )
  }
}

export default ListAlbums
