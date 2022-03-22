import '../Style/Header.css';
import Linkedin from '../Assets/linkedin.svg'
import printSvg from './PrintSvg'
function Header() {
    return(<div className="Title"> 
     <h1>Mon profil en détail</h1>
     <a href="https://www.linkedin.com/in/louis-aubert-118a49176/" target="_blank" rel="noreferrer" >{printSvg(Linkedin, 'Linkedin_Logo')}</a>
    </div>)
}

export default Header