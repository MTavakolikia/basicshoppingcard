import React from 'react';
  const Navbar = (props) => {
      return ( 
        <React.Fragment>
        <nav className="navbar navbar-light bg-light">
           <div className="container-fluid">
               <h5 className="navbar-brand">Navbar <span className="badge bg-warning">{props.totalCounters}</span></h5>
           </div>
       </nav>
       </React.Fragment>
       );
  }
   
  export default Navbar;