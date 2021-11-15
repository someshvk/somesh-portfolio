// require('file-loader?name=[name].[ext]!./index.html');
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import GlobalStyles from './Styles/GlobalStyles';
import Loader from './Components/Loader/Loader'
import TabMenu from './Components/TabsMenu/TabMenu';
import Socials from './Components/Socials/Socials';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function UnionComponent(){
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
          setLoading(false);
        }, 2000);
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

    let isMobile = !(width <= 540);

    return (
        <>
            <GlobalStyles />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"/>
            {
                loading ? 
                (<Loader />)
                :
                (
                    <>
                    {
                        isMobile 
                        ?
                        <Router>
                            <TabMenu />
                            <Socials />
                            <Routes>
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Router>
                        :
                        <>
                            <NavBar />
                            <Home />
                            <About />
                            <Work />
                            <Contact />
                        </>
                    }
                    </>
                )
            }
        </>
    );
}

ReactDOM.render(<UnionComponent />, document.getElementById('root'));