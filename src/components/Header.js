import trollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <header>
            <img src={trollFace} alt='troll face' className='header--logo'/>
            <span className='header--title'>Meme Generator</span>
            <span className='header--project'>React Course - Project 3</span>
        </header>
    )
}