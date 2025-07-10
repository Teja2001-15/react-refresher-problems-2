import React, { useState } from 'react';
import './App.css';

function ThemeToggler() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        document.body.classList.toggle('dark');
        setDarkMode(prev => !prev);
    };

    return (
        <div className="box">
            <button onClick={toggleTheme}>
                {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
            </button>
        </div>
    );
}

export default ThemeToggler;