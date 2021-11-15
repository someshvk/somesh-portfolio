import React, {useState, useEffect} from 'react';
import './home.css';
import someshProfile from '../../images/someshProfile.png';
import Resume from '../../PDF/Resume.pdf';

const Home = () =>{
    const text = ['Developer', 'Creator', 'Problem Solver'];
    const [aboutText, setAboutText] = useState(text[0]);
    useEffect(() => {
        setInterval(() => {
            setAboutText(()=>{
                const text = ['Developer', 'Creator', 'Problem Solver'];
                return text[Math.floor(Math.random()*text.length)];
            });
        }, 2500);
        return () => setAboutText({});
    }, []);

    const [width, setWidth] = useState(window.innerWidth);
    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
            setWidth({});
        }
    }, []);

    let isMobile = (width <= 540);

    const showResume = () => {
        const iframe = "<iframe width='100%' height='100%' style={{margin: '0'}} src='" + Resume+ "'></iframe>"
        const x = window.open();
        x.document.title = 'Resume';
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }

    return (
        <section className="home" id="home" style={{position: isMobile ? 'static' : 'absolute'}}>
            <div className="heroSection">
                <h3 className="hero1">Hi, I am</h3>
                <h1 className="hero2">Somesh Khandelwal<span className="dot">.</span></h1>
                <h1 className="hero3">I am a <span className="highlightedText">{aboutText}</span>.</h1>
                <p className="hero4">I am an <span className="highlightedText">Enthusiastic Learner</span> who likes to work on different technologies and create stuffs.</p>
                <div className="resumeBtn">
                    <span className="button" onClick={()=>showResume()}>Resume</span>
                </div>
            </div>
            <div className="imageSection">
                <div className="imgBox">
                    <img className="profileImg" src={someshProfile} alt="Somesh-Profile"/>
                </div>
            </div>
        </section>
    );
}

export default Home;