class SoundsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/sounds"
  }

  getSounds() {
    return fetch(this.baseUrl).then(res => res.json()
    )
  }
}




//we'll use this later
// adapter = new SoundsAdapter()
//
// const sounds = adapter.getSounds()
