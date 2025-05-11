import React from 'react';
import NavbarWithAsideBar from '../components/NavBar';

const Activity = () => {
  // Mock activity data
  const activities = [
    { time: '10:00 AM', description: 'User John created a new project: "Website Redesign"' },
    { time: '11:30 AM', description: 'Anna updated the billing information.' },
    { time: '12:15 PM', description: 'Meeting scheduled for next Monday with the dev team.' },
    { time: '1:45 PM', description: 'Project "Marketing Campaign" marked as completed.' },
    { time: '3:00 PM', description: 'User Mike commented on "UI Enhancements" task.' },
  ];

  return (
    <>
    <NavbarWithAsideBar/>
    <div className='container mt-5'>
      <div className="text-center mb-4">
        <h1 className="text-primary">Recent Activities</h1>
        <p className="text-muted">Stay updated with your latest project and team actions</p>
      </div>

      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <div className="card shadow-sm p-4">
            <h4 className='mb-3'>Activity Timeline</h4>
            <ul className='list-group'>
              {activities.map((activity, index) => (
                <li key={index} className='list-group-item d-flex justify-content-between align-items-start'>
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>{activity.time}</div>
                    {activity.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Activity;
