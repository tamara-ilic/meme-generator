import { useEffect, useState } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: 'test',
        bottomText: 'bottom test',
        randomImage: 'http://i.imgflip.com/1bij.jpg' 
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <div className='form--inputs'>
                    <input
                        type='text'
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                        placeholder='Top text'
                    />
                    <input
                        type='text'
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                        placeholder='Bottom text'
                    />
                </div>
                <button onClick={getMemeImage} className='form--button'>
                    Get a new meme image<span className='form--button_emoji'>🖼️</span>
                </button>
               
                <div className='meme'>
                    <img src={meme.randomImage} alt='' className='meme--image' />
                    <h2 className='meme--text top'>{meme.topText}</h2>
                    <h2 className='meme--text bottom'>{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}