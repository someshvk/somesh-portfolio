import React, {useState, useEffect} from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () =>{
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getSubject, setSubject] = useState('');
    const [getMsg, setMsg] = useState('');

    const submitMail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_1r5l82b', 'template_34eu7uh', e.target, 'user_UtYK3ubdbjAQvOlOHMTEo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setName('');
        setEmail('');
        setSubject('');
        setMsg('');
    }

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            // window.removeEventListener('resize', handleWindowSizeChange);
            setWidth({});
        }
    }, []);

    let isMobile = (width <= 540);

    return (
        <section className="contact" id="contact" style={{position: isMobile ? 'static' : 'absolute'}}>
            <div className="contactHeading"><span className="contactText"><span className="highlightedText">3. </span>Contact</span></div>
            <div className="contactContainer">
                <span className="getInTouch">Get In Touch</span>
                <form className="contactForm" onSubmit={submitMail}> 
                    <input name="name" value={getName} type="text" placeholder="NAME" onChange={e => setName(e.target.value)}/>
                    <input name="email" value={getEmail} type="text" placeholder="E-MAIL" onChange={e => setEmail(e.target.value)} required />
                    <input name="subject" value={getSubject} type="text" placeholder="SUBJECT" onChange={e => setSubject(e.target.value)}/>
                    <textarea name="message" value={getMsg} type="text" placeholder="MESSAGE" onChange={e => setMsg(e.target.value)} required />
                    <button type="submit" className="contactBtn" >SEND</button>
                </form>
            </div>
            <div className="footer">
                <h3>Created by Somesh Khandelwal</h3>
                <h3>@someshvk 2021</h3>
            </div>
        </section>
    );
}

export default Contact;