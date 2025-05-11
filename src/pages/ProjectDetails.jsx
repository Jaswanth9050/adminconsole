import React from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import { data } from '../data/data'
import NavbarWithAsideBar from '../components/NavBar'


const ProjectDetails = () => {
    const {id}=useParams()
    const project=data.find((m)=>m.id == id);
    console.log(project)
  const back=useNavigate()
  return (
    <div>
      <NavbarWithAsideBar/>
        <div className="container">
            <div className="row text-center d-flux justify-content-center">
                <h1 className='my-3 text-primary'>Project Details</h1>
                <div className="col-md-6">
                <div className="card text-center">
                  <img src={project.image} alt={project.ProjectName} className='img-fluid mb-2 rounded-top' />
                   <h5>Project:{project.ProjectName}</h5>
                   <p>Desc:{project.desc}</p>
                   <p>Session : {project.section}</p>
                   <p>
                    <Link to={`/project/${id}/settings`}>
                      <button className='mx-3 btn btn-outline-secondary'>Setting</button>
                    </Link>
                    <button className='btn btn-outline-danger' onClick={()=>back('/project')}>Go Back</button>
                    {/* <Link to={`/project`}>
                    <button>back</button>
                    </Link> */}
                   </p>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails