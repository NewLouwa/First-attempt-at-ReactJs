import  {skillsList}  from '../Datas/skillsData'
import  printSkills  from '../Components/PrintSkills'
import '../Style/SkillsList.css'


function printSkillsLists() {
    
	return (
        <ul className='skills-list'>
            {skillsList.map(({ id, icon, name, category, lvl ,note }) =>
	                    <div key={id}>
	                        {printSkills({icon,name,category,lvl,note})}
                            <br></br><br></br>
	                    </div>
            )}
        </ul>
    )
}
        


export default printSkillsLists