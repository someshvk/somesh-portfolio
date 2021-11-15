import React, {useState, useEffect} from 'react';
import './work.css';
import projects from './projectData';

const Work = () =>{
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
        <section className="work" id="work" style={{position: isMobile ? 'static' : 'absolute'}}>
            <div className="workHeading"><span className="workText"><span className="highlightedText">2. </span>Work</span></div>
            <div className="workContainer">
                {
                    projects.map((project, index)=>{
                        return (
                            <div key={index} className="projects">
                                <div className="workImage">
                                    <span className="projectTitle"><div className="titleBorder"><span className="titleBox">{project.title}</span></div></span>
                                    <img className="projectImg" src={project.img} alt="img"></img>
                                </div>
                                <div className="workContent">
                                    <span className="projectDes">
                                        {
                                            project.description.map((p, index)=>{
                                                return <div key={index} className="desPara"><span className="arrow">▹</span>{p}</div>;
                                            })
                                        }    
                                    </span>
                                    <span className="projectTech">
                                        <ul>
                                            {
                                                project.technologies.map((p, index)=>{
                                                    return <li key={index} className="projectTechList">{p}</li>;
                                                })
                                            }
                                        </ul>
                                    </span>
                                    <span className="projectBtn">
                                        <a href={project.url} rel="noopener noreferrer" target="_blank" className="gitLink"><i className="fab fa-github-square"></i></a>
                                    </span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="showMoreBtn">
                <div className="btnBorder">
                    <a href="https://github.com/someshvk" rel="noopener noreferrer" target="_blank" className="button">Show More</a>
                </div>
            </div>
        </section>
    );
}

export default Work;