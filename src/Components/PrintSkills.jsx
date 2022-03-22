

function printSkills({ icon, name, category, lvl , note}) {
    
	return (<li className="skill">{icon} {name} <br></br> Niveau : {lvl} <br></br> {note}</li>)
}

export default printSkills