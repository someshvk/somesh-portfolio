import React from 'react';
import './modal.css';
import {Link} from 'react-scroll';

const Modal = ({changeModal}) => {
    // const changeWindow = (position) =>{
    //     window.location.replace(position);
    //     changeModal();
    // }
    return (
        <>
            <div className="modalBg" >
                <span className="modalContent">
                    <Link activeClass="active" to="home" spy={true} smooth={true}><span className="menu homeMenu" onClick={() => changeModal()}><span className="highlightedText">1. </span>Home</span></Link>
                    <Link to="about" spy={true} smooth={true}><span className="menu aboutMenu" onClick={() => changeModal()}><span className="highlightedText">2. </span>About</span></Link>
                    <Link to="work" spy={true} smooth={true}><span className="menu workMenu" onClick={() => changeModal()}><span className="highlightedText">3. </span>Work</span></Link>
                    <Link to="contact" spy={true} smooth={true}><span className="menu contactMenu" onClick={() => changeModal()}><span className="highlightedText">4. </span>Contact</span></Link>
                </span>
            </div>
        </>
    );
}
// 1056-4E4B-5E3C-9DA1-3FCF-315F-DC92-3AF8
export default Modal;