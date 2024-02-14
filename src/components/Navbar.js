import React, {useState, useEffect} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation();
    const [active, setActive] = useState('home'); // Initialize with 'home' or based on the current URL

    useEffect(() => {
        // Function to extract the active section from the URL
        const getCurrentPath = () => {
            // Use location.pathname for BrowserRouter or location.hash for HashRouter
            const path = location.pathname || location.hash; // Adjust based on Router type
            // Extract the path without '/' or '#/'
            const cleanPath = path.replace(/\/|#\//, '');
            return cleanPath || 'home'; // Default to 'home' if cleanPath is empty
        };

        // Set the active link based on the current URL path
        const currentPath = getCurrentPath();
        setActive(currentPath);

    }, [location]); // Depend on location to re-run effect when it changes

    // Function to handle link click, updates the active state
    const handleLinkClick = (activeLink) => {
        setActive(activeLink);
    };

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'}
                         className={(link.active === active && !link.type) ? Style.active : ''}
                         sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => handleLinkClick(link.active)}>
                            {!link.type && <p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    );
}