import React from 'react';

function SocialIcon(props) {
    const {link, icon, label, text} = props;
    return (
        <>
        <p>{ text }</p>
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true"/>
        </a>
        </>
    );
}

export default SocialIcon;