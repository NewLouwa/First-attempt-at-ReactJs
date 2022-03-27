import '../Style/SkillsList.css'

function PrintSkills({ icon, name, lvl , note}) {

    
    return (<div className="item-content" >{icon} {name} <br></br> Niveau : {lvl} <br></br> {note}</div>)
}
export default PrintSkills