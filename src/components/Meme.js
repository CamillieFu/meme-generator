import React from "react"
import '../assets/meme_form.css'

export default function Meme() {
  return (
    <div className="meme-div">
      <form className="meme-form">
        <div className="meme-form-input">
          <input type="text" name="input-1" />
          <input type="text" name="input-2" />
        </div>
        <input type="submit" value="Generate Meme" className="meme-form-submit-button" />
      </form>
    </div>
  )
}
