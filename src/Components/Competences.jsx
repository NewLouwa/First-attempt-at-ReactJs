import '../Style/Competences.css';
import printSkillsLists from './PrintSkillsList';
function Competences() {
    return( 
        <div className="Competences" >
        <h2 className="headComp">Compétences</h2>
            <div>
                {printSkillsLists()}
            </div>  
        </div> )
}

export default Competences