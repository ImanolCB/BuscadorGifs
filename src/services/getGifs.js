  //API key
  const apiKey = "9T6CsbyEO4vXHl4HiSAwNEomsHpZDNzU"


export default function getGifs({ keyword } = {}) {

// API url
  const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=9&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(urlApi)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gif = data.map(image =>{
            const {images, title, id} = image
            const url = images.fixed_height.url
            return {title, id, url}
        })
        return gif
      })
      .catch(error => console.error("Error fetching GIFs:", error));
}