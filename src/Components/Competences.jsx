import '../Style/Competences.css';
import { skillsList } from '../Datas/skillsData';
import PrintSkillsList from './PrintSkillsList';
import {useState} from 'react';
import Categories from './Categories';

function Competences() {   
    const categories = skillsList.reduce(
        (acc, skills) =>
            acc.includes(skills.category) ? acc : acc.concat(skills.category),
        []
    ) 
   
const [activeCategory, setActiveCategory] = useState('')



    return( 
        <section className="Competences" >
        <div className='skills-Head'>
            <h2 className="headComp">Compétences</h2>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />

        </div>
        
            <div>
                {PrintSkillsList(activeCategory)}
            </div>  
        </section> )
}

export default Competences