import '../Style/Competences.css';
import printSkillsLists from './PrintSkillsList';
function Competences() {
    return( 
        <section className="Competences" >
        <h2 className="headComp">Compétences</h2>
            <div>
                {printSkillsLists()}
            </div>  
        </section> )
}

export default Competences