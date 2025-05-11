import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { data } from '../data/data'
import ProjectDetails from './ProjectDetails'
import NavbarWithAsideBar from '../components/NavBar'

const Projects = () => {
    // const {id,projectName,desc}=ele
  return (
    <div>
        <NavbarWithAsideBar/>
        <div className="container text-center">
            <div className="row">
                <h1 className='text-success my-2'>Project ShowCase</h1>
                {
                    data.map((ele)=>(
                        
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-2">
                        <ProjectCard   project={ele} />
                        </div>
                    ))
                }

                
            </div>
        </div>
        {/* <ProjectDetails/> */}
        
    </div>
  )
}

export default Projects