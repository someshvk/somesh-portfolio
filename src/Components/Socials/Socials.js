import React from 'react';
import './socials.css';

const Socials = () =>{
    const copyToClipboard = () =>{
        navigator.clipboard.writeText('svkhandelwal655@gmail.com');
    }

    return (
        <section className="socials">
            <ul>
                <li><a href="mailto:svkhandelwal655@gmail.com" onClick={copyToClipboard}><i className="fas fa-at" aria-hidden="true"></i></a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/somesh-khandelwal-269755195/"><i className="fab fa-linkedin" aria-hidden="true"></i> </a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/someshvk"><i className="fab fa-twitter" aria-hidden="true"></i> </a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/someshvk"><i className="fab fa-github" aria-hidden="true"></i> </a></li>
                <li><a rel="noopener noreferrer" target="_blank" href="https://codepen.io/someshvk"><i className="fab fa-codepen" aria-hidden="true"></i> </a></li>
            </ul>
            <div className="verticalLine"></div>
        </section>
    );
}

export default Socials;