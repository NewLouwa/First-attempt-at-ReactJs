import  {skillsList}  from '../Datas/skillsData'
import PrintSkills from './PrintSkills'


function PrintSkillsList(cat) {
    
    const activeCategory = cat
    

	return ( 
        <div className='items-list-container'>
            {skillsList.map(({ id, b_icon, s_icon, name, category, lvl, note }) => !activeCategory || activeCategory === category ?(
	                    <div className='item-container' key={id}>
	                        {PrintSkills(b_icon, s_icon, name, lvl, note)}
                            <br></br><br></br>
	                    </div>
                        ) : null
            )}
    </div> 

    )
}
        


export default PrintSkillsList