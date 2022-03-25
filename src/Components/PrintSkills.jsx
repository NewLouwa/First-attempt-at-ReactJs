

function printSkills({ icon, name, category, lvl , note}) {
    
	return (<div className="item-content">{icon} {name} <br></br> Niveau : {lvl} <br></br> {note}</div>)
}

export default printSkills