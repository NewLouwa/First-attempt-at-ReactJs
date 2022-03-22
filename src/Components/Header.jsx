import '../Style/Header.css';
import Linkedin from '../Assets/linkedin.svg'
import printSvg from './PrintSvg'
function Header() {
    return(<div className="Title"> 
     <h1>Mon profil en détail</h1>
     {printSvg(Linkedin, 'Linkedin_Logo')}
    </div>)
}

export default Header