import React from 'react'

// stateless functional component

const NavBar = ({count}) =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <p className="navbar-brand">Navbar</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link">Home <span className="badge badge-pill bg-success">{count()}</span></p>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;