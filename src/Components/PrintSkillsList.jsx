import  {skillsList}  from '../Datas/skillsData'
import  printSkills  from '../Components/PrintSkills'
import '../Style/SkillsList.css'


function printSkillsLists() {
    
	return (  
        <div className='items-list-container'>
            {skillsList.map(({ id, icon, name, category, lvl ,note }) =>
	                    (<div className='item-container' key={id}>
	                        {printSkills({icon,name,category,lvl,note})}
                            <br></br><br></br>
	                    </div>)
            )}
        </div>

    )
}
        


export default printSkillsLists