import React, {useState, useEffect} from 'react';
import './about.css';

const About = () =>{
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

    const technologies = ['Data Strutures & Algorithms', 'Blockchain', 'JavaScript', 'ReactJS', 'Node.js', 'Python'];

    return (
        <section className="about" id="about" style={{position: isMobile ? 'static' : 'absolute'}}>
            <div className="aboutHeading"><span className="aboutText"><span className="highlightedText">1. </span>About</span></div>
            <div className="aboutContainer">
                <div className="aboutContent">
                    <p>
                        Hello! My name is <span className="highlightedText">Somesh Khandelwal</span>. I am a Computer Science grad in India. I believe in a <span className="highlightedText">π</span> shaped learning
                        i.e. you should know something of everything and everything of something. This helped me to discover Computer Science as my interest and 
                        thus I like to explore new Technologies( mostly <span className="highlightedText">Web Development </span>). I also like to Read( sometimes ).
                    </p>
                    <p>
                        I am a fresher in the Industry with interests in solving problems with efficiency and <span className="highlightedText">creativity</span> in mind.
                        I have implemented different technologies on the projects I have worked on. I am happiest when I create stuff and learn. And what could be better than building things and solving problems with 
                        other people. so, I am <span className="highlightedText">Open to Work</span>. Feel free to get in touch.
                    </p>
                </div>
                <div className="recentTech">
                    <span>Some recent technologies that I am working on :</span>
                    <ul>
                    {
                        technologies.map((t, index)=>{
                            return (
                                <li key={index}><span className="highlightedText">▹</span><span>{t}</span></li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;