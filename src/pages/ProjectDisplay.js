 
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
   
  
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt="img" />
      <p><b>Skills:</b> {project.skills}</p>
      <a href={project.link} ><GitHubIcon /> </a>
    </div>
  )
}

export default ProjectDisplay