import '../Style/Languages.css';
import PrintPng from "./PrintPng.jsx"

import frPNG from '../Assets/frflag.png'
import allPNG from '../Assets/allflag.png'
import enPNG from '../Assets/ukflag.png'

const frFlag = PrintPng(frPNG, 'france_drapeau' )
const allFlag = PrintPng(allPNG, 'allemagne_drapeau' )
const enFlag = PrintPng(enPNG, 'angleterre_drapeau' )


function Languages() {
    return(<section className="languages"> 
     <h2 className='languages-title'>Langues </h2>
     <ul>
     <li><div className="item-content" >  {frFlag}  Francais <br></br> Langue natale <br></br> Peut lire des textes complexes (ex: documentation technique) les comprendre et les ré-expliquer</div></li><br></br>
     <li><div className="item-content" >  {enFlag}  Anglais <br></br> Langue vivantes 1 ( B2/C1 ) <br></br> Peut lire des textes complexes (ex: documentation technique) les comprendre et les ré-expliquer</div></li><br></br>
     <li><div className="item-content" >  {allFlag}  Allemand <br></br> Langue vivantes 2 ( bases ) <br></br> Peut s'orienter et demander des renseignemments de base</div></li><br></br>
     </ul>
     
    </section>)
}

export default Languages