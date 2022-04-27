import '../Style/SkillsList.css'

export default function PrintSkills( b_icon, s_icon, name, lvl , note) {

    
    return (
    <div className="item-content" >
        <div className="item-content-logo">{b_icon} </div>
        <div className="item-content-data">{s_icon} <br></br> {name} <br></br> Niveau : {lvl} <br></br> {note}</div>
       
    </div>
    )
}
