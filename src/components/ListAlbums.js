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
      movieJsx = this.state.albums.map(album =>
        (
          <div className="container" key={album.title['label']} sm={6} md={4}>
            <div key={album.title['label']}>
              <Link to={`/album/${album.id.attributes['im:id']}`}><img className="flex-items" src={album['im:image'][0]['label']}/> </Link>
              { /* <li className="album-cover" key={album.title['label']}>
              </li>
                <Link to={`/album/${album.id.attributes['im:id']}`}>{album['im:name'].label}</Link>
                <p>by: {album['im:artist'].label}</p>
              <p>{album['im:price'].label}</p>
              <p>Release Date: {album['im:releaseDate'].attributes.label}</p> */}
            </div>
          </div>
        )
      )
      console.log(this.state.albums[0]['im:image'][0]['label'])
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
