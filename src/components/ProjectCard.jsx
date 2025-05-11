import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
    const {id,ProjectName,desc,image}=project
  return (
    <div>
        <div className="card shadow">
          <img src={image} alt="" className='img-fluid rounded-top' />
            <h3>{ProjectName}</h3>
            <div className="card-body">
                <p>{desc}</p>
                <Link to={`/project/${id}`}>
                <button className='btn btn-outline-success'>Details</button>
                {/* details */}
                </Link>
                <Link to={`/project/${id}/settings`}>
                  <button className='mx-3 btn btn-outline-secondary'>Setting</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard