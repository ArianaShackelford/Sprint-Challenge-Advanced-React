import React from 'react';


const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };
    return(
        <nav className='navbar'>
            <h1>Women's World Cup Player Search Trends</h1>
            <div clasName='dark-mode__toggle'>
                <div
                    onClick={toggle}
                    clasName={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default Navbar;