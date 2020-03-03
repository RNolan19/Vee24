import React from 'react'
import apiUrl from '../apiConfig'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        console.log(res.data.feed.entry)
        this.setState({ albums: res.data.feed.entry })
      })
      .catch(console.error)
  }

  render () {
    let count = 1

    let movieJsx = ''
    if (this.state.albums.length === 0) {
      movieJsx = 'Loading...'
    } else {
      movieJsx = this.state.albums.map(album =>
        (
          <div className="container" key={album.title['label']} sm={6} md={4}>
            { /* Every album is an object. This basically says, does the object have data? If so add a 1 to the counter */}
            <p className="numbers"><strong>{Object.entries ? count++ : console.log('nothing there')}</strong></p>
            <img className="flex-items" src={album['im:image'][0]['label']}/>
            <hr></hr>
            <a href={`${album.id.label}`} target="_blank" rel="noopener noreferrer" ><strong className="album-name">{album['im:name'].label}</strong></a>
            <p className="artists"><strong>by: {album['im:artist'].label}</strong></p>
            {/* <p><strong>Tracks: {album['im:itemCount'].label}</strong></p> */}
            <p><strong>{album['im:price'].label}</strong></p>
            <Button href= {`${album.id.label}`} target="_blank">Buy On iTunes</Button>
            { /* <p>Release Date: {album['im:releaseDate'].attributes.label}</p> */}
          </div>
        )
      )
      console.log(this.state.albums[0]['im:image'][0]['label'])
    }

    return (
      <div className="header-text">
        <br></br>
        <p>The top 100 most popular and best selling hit albums downloaded on iTunes today.</p>
        <ul>
          {movieJsx}
        </ul>
      </div>
    )
  }
}

export default ListAlbums
