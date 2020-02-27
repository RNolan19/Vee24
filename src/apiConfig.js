let apiUrl
const apiUrls = {
  production: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
  development: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
