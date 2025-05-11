// // import React from 'react'

// // const AsideBar = () => {
// //   return (
// //     <div>
// //         <div className="offcanvas offcanvas-start show text-bg-dark" tabindex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
// //             <div className="offcanvas-header">
// //                 <h5 className="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
// //                 <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvasDark" aria-label="Close"></button>
// //             </div>
// //             <div className="offcanvas-body">
// //                 <p>Projects</p>
// //                 <p>Activity</p>
// //                 <p>Billing</p>
// //                 <button className='btn btn-outline-primary'>Logout</button>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default AsideBar

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import { FaBars } from 'react-icons/fa'; // Importing an icon for the toggle
// import { Link } from 'react-router-dom';

// const AsideBar = () => {
//     const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(true); // Start with the offcanvas visible

//     const toggleOffcanvas = () => {
//         setIsOffcanvasVisible(!isOffcanvasVisible);
//     };


//     return (
//         <div>
//             {/* Button to toggle offcanvas */}
//             {!isOffcanvasVisible && (
//                 <button className="btn btn-primary" onClick={toggleOffcanvas}>
//                     <FaBars />
//                 </button>
//             )}

//             {/* Offcanvas component */}
//             <div className={`offcanvas offcanvas-start ${isOffcanvasVisible ? 'show' : ''} text-bg-dark`} tabIndex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel" style={{ display: isOffcanvasVisible ? 'block' : 'none' }}>
//                 <div className="offcanvas-header ">
//                     <h5 className="offcanvas-title" id="offcanvasDarkLabel">Sessions</h5>
//                     <button type="button" className="btn-close btn-close-white" onClick={toggleOffcanvas} aria-label="Close"></button>
//                 </div>
//                 <div className="offcanvas-body">
//                     <p><Link to={'/project'} className='text-deceration-none text-white'>Projects</Link></p>
                    
//                     <p><a to={'/activity'}>Activity</a></p>
//                     <p><a to={'/billing'}>Billing</a></p>
//                     <button className='btn btn-outline-primary'>Logout</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AsideBar;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import { FaBars } from 'react-icons/fa'; // Importing an icon for the toggle
// import { Link } from 'react-router-dom';

// const AsideBar = () => {
//     const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(true); // Start with the offcanvas visible

//     const toggleOffcanvas = () => {
//         setIsOffcanvasVisible(!isOffcanvasVisible);
//     };

//     const handleLinkClick = () => {
//         setIsOffcanvasVisible(false); // Close the offcanvas when a link is clicked
//     };

//     return (
//         <div>
//             {/* Button to toggle offcanvas */}
//             {!isOffcanvasVisible && (
//                 <button className="btn btn-primary" onClick={toggleOffcanvas}>
//                     <FaBars />
//                 </button>
//             )}

//             {/* Offcanvas component */}
//             <div className={`offcanvas offcanvas-start ${isOffcanvasVisible ? 'show' : ''} text-bg-dark`} tabIndex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel" style={{ display: isOffcanvasVisible ? 'block' : 'none' }}>
//                 <div className="offcanvas-header ">
//                     <h5 className="offcanvas-title" id="offcanvasDarkLabel">Sessions</h5>
//                     <button type="button" className="btn-close btn-close-white" onClick={toggleOffcanvas} aria-label="Close"></button>
//                 </div>
//                 <div className="offcanvas-body">
//                     <p>
//                         <Link to={'/project'} className='text-decoration-none text-white' onClick={handleLinkClick}>Projects</Link>
//                     </p>
//                     <p>
//                         <Link to={'/activity'} className='text-decoration-none text-white' onClick={handleLinkClick}>Activity</Link>
//                     </p>
//                     <p>
//                         <Link to={'/billing'} className='text-decoration-none text-white' onClick={handleLinkClick}>Billing</Link>
//                     </p>
//                     <p>
//                         <Link to={'/logout'} className='text-decoration-none text-white' onClick={handleLinkClick}></Link>
//                     </p>

//                     {/* <Link to={'/logout'}>
//                         <button className='btn btn-outline-primary'>Logout</button>
//                     </Link> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AsideBar;