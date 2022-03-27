import  {skillsList}  from '../Datas/skillsData'
import Categories from './Categories'
import {useState} from 'react'
import PrintSkills from './PrintSkills'


function PrintSkillsList(cat) {
    
    const activeCategory = cat
    

	return ( 
        <div className='items-list-container'>
            {skillsList.map(({ id, icon, name, category, lvl, note }) => !activeCategory || activeCategory === category ?(
	                    <div className='item-container' key={id}>
	                        < PrintSkills icon={icon} name={name} lvl={lvl} note={note} />
                            <br></br><br></br>
	                    </div>
                        ) : null
            )}
    </div> 

    )
}
        


export default PrintSkillsList