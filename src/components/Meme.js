import React, { useEffect } from "react"
import '../assets/meme_form.css'
import '../assets/meme_image.css'

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState({});

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data));
  }, []);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  function getMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.data.memes.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: allMemes.data.memes[randomNumber].url
    })
    )
  }

  return (
    <div className="meme-div">
      <div className="meme-form">
        <input
          className="meme-form-input"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="meme-form-input"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme-form-submit-button" onClick={getMeme}>Get a New Meme Image</button>
      </div>
      <div className="meme-div">
        <img src={meme.randomImage} alt="meme" className="meme-image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
