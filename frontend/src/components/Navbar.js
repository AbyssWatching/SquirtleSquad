import React from 'react';



const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>POKE-CHA</h1>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/components/collections">collections</a>

            </div>
        </nav>
     );
}
 
export default Navbar;