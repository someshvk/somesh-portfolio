import React, {useState} from 'react';
import './navbar.css';
import logo from '../../SVG/Vector.svg';
import Modal from './Modal/Modal';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const NavBar = () =>{
    const [selected, setSelected] = useState(false);

    const changeModal = () => {
        setSelected(!selected);
        if(!selected){
            disableBodyScroll(window);
        }
        else{
            enableBodyScroll(window);
            clearAllBodyScrollLocks(window);
        }
    }

    const copyToClipboard = () =>{
        navigator.clipboard.writeText('svkhandelwal655@gmail.com');
    }

    return (
        <React.Fragment>
            <div className="navbar">
                <span className="logo">
                    <img src={logo} alt="logo" />
                </span>
                <span className="socialMedia">
                    <ul>
                        <li><a rel="noopener noreferrer" target="_blank" href="mailto:svkhandelwal655@gmail.com" onClick={copyToClipboard}><i className="fas fa-at" aria-hidden="true"></i> </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/somesh-khandelwal-269755195/"><i className="fab fa-linkedin" aria-hidden="true"></i> </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/someshvk"><i className="fab fa-twitter" aria-hidden="true"></i> </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://github.com/someshvk"><i className="fab fa-github" aria-hidden="true"></i> </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href="https://codepen.io/someshvk"><i className="fab fa-codepen" aria-hidden="true"></i> </a></li>
                    </ul>
                </span>
                <span className="modal">
                    <i className={selected ? 'fas fa-times' : 'fas fa-bars'} onClick={changeModal}></i>
                </span>
                {
                    selected ? (
                        <Modal changeModal={changeModal}/>
                    ) : null
                }
            </div>
        </React.Fragment>
    );
}

export default NavBar;