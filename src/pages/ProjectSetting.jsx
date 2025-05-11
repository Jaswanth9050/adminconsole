
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/data';
import NavbarWithAsideBar from '../components/NavBar';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = data.find((m) => m.id == id);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false); // State to manage edit mode
    const [projectName, setProjectName] = useState(project ? project.ProjectName : ""); // State for project name

    // Function to handle editing
    const handleEditClick = () => {
        setIsEditing(!isEditing); // Toggle edit mode
    };

    // Function to handle input change
    const handleInputChange = (event) => {
        setProjectName(event.target.value); // Update project name state
    };

    // Check if the project exists
    if (!project) {
        return (
            <div className="container text-center">
                <h1 className="my-3">Project Not Found</h1>
                <button className="btn btn-outline-danger" onClick={() => navigate('/project')}>Go Back</button>
            </div>
        );
    }

    return (
       <>
        <NavbarWithAsideBar/>
        <div className="container">
            <div className="row text-center d-flex justify-content-center">
                {/* <h1 className='my-3 text-warning'>Project Settings</h1> */}
                <h1 className={`my-3 ${isEditing?'text-danger':'text-warning'}`}>{!isEditing?'Project Settings':'Project Edit'}</h1>
                
                <div className="col-md-6">
                    <div className="card text-center">
                    <img src={project.image} alt={project.ProjectName} className='img-fluid mb-2 rounded-top' />
                        <h5>Project: {isEditing ? <input type="text" value={projectName} onChange={handleInputChange} /> : project.ProjectName}</h5>
                        <p>Description: {project.desc}</p>
                        <p>
                            <button className='btn btn-outline-primary m-3' onClick={handleEditClick}>
                                {isEditing ? 'Save' : 'Edit'}
                            </button>
                            <button className='btn btn-outline-danger' onClick={() => navigate('/project')}>Go Back</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default ProjectDetails;