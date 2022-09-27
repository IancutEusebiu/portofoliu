import React from 'react'
import {useNavigate} from 'react-router-dom';

function ProjectItem({image,name,id}) {
  const nav= useNavigate()
  return (
    <div className='projectItem' onClick={()=>{nav('/projects/'+id)}}>
        <div style={{backgroundImage: `url(${image})` }} className='bgImage' />
          <h1>{name}</h1>
        
    </div>
  )
}

export default ProjectItem