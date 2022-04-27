import React from 'react'

import '../Style/SkillsList.css'

export default function PrintSkillsButton(b_icon,s_icon,name,lvl,note) {
  return (
    <div>
        <button onClick={console.log("Is clicked")} className="item-content-logo">  {b_icon}</button><br></br>
        
    </div>
      )
}
