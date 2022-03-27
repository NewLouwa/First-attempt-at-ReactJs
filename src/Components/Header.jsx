import '../Style/Header.css';
import Linkedin from '../Assets/linkedin.svg'
import git from '../Assets/github.svg'
import twitter from '../Assets/twitter.svg'
import printSvg from './PrintSvg'
function Header() {
    return(<header className="Title"> 
     <h1>Louis Aubert 💻</h1><br></br>
     <h2>Developpeur Web Junior</h2>
     <h1> EN CONSTRUCTION </h1>
     <a href="https://www.linkedin.com/in/louis-aubert-118a49176/" target="_blank" rel="noreferrer" >{printSvg(Linkedin, 'Linkedin_Logo')}</a>
     <a href="https://github.com/NewLouwa" target="_blank" rel='noreferrer'>{printSvg(git, 'Github_Logo')}</a>
     <a href="https://twitter.com/SaDevLi" target="_blank" rel='noreferrer'>{printSvg(twitter, 'Twitter_Logo')}</a>
    </header>)
}

export default Header