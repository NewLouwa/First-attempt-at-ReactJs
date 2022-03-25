import '../Style/Header.css';
import Linkedin from '../Assets/linkedin.svg'
import printSvg from './PrintSvg'
function Header() {
    return(<header className="Title"> 
     <h1>Louis Aubert </h1>
     <a href="https://www.linkedin.com/in/louis-aubert-118a49176/" target="_blank" rel="noreferrer" >{printSvg(Linkedin, 'Linkedin_Logo')}</a>
    </header>)
}

export default Header