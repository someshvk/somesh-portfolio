import React from 'react';
import './modal.css';

const Modal = ({changeModal}) => {
    const changeWindow = (position) =>{
        window.location.replace(position);
        changeModal();
    }
    return (
        <React.Fragment>
            <div className="modalBg" >
                <span className="modalContent">
                    <span className="menu homeMenu" onClick={() => changeWindow("/#home")}><span className="highlightedText">1. </span>Home</span>
                    <span className="menu aboutMenu" onClick={() => changeWindow("/#about")}><span className="highlightedText">2. </span>About</span>
                    <span className="menu workMenu" onClick={() => changeWindow("/#work")}><span className="highlightedText">3. </span>Work</span>
                    <span className="menu contactMenu" onClick={() => changeWindow("/#contact")}><span className="highlightedText">4. </span>Contact</span>
                </span>
            </div>
        </React.Fragment>
    );
}

export default Modal;