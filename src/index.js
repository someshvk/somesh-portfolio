import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import GlobalStyles from './Styles/GlobalStyles';
import Loader from './Components/Loader/Loader';
import Home from './Components/Home/Home';
// import TabMenu from './Components/TabsMenu/TabMenu';
// import NavBar from './Components/NavBar/NavBar';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

// const retry = (fn, ms) => new Promise(resolve => { 
//     fn()
//       .then(resolve)
//       .catch(() => {
//         setTimeout(() => {
//           console.log('Retrying...');
//           retry(fn, ms).then(resolve);
//         }, ms);
//     })
// });

const LazyTabMenu = React.lazy(() => import('./Components/TabsMenu/TabMenu'));
const LazyNavBar = React.lazy(() => import('./Components/NavBar/NavBar'));
const LazySocials = React.lazy(() => import('./Components/Socials/Socials'));
const LazyAbout = React.lazy(() => import('./Components/About/About'));
const LazyWork = React.lazy(() => import('./Components/Work/Work'));
const LazyContact = React.lazy(() => import('./Components/Contact/Contact'));

function UnionComponent(){
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
          setLoading(false);
        }, 1000);
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
                (
                    <Loader />
                )
                :
                (
                    <>
                    {
                        isMobile 
                        ?
                        <Router>
                            <React.Suspense fallback={<Loader />}>
                                <LazyTabMenu />
                                <LazySocials />
                                <Routes>
                                    <Route path="/" element={<Navigate replace to="/home" />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/about" element={<LazyAbout />} />
                                    <Route path="/work" element={<LazyWork />} />
                                    <Route path="/contact" element={<LazyContact />} />
                                </Routes>
                            </React.Suspense>
                        </Router>
                        :
                        <>
                        <React.Suspense fallback={<Loader />}>
                            <LazyNavBar />
                            <Home />
                            <LazyAbout />
                            <LazyWork />
                            <LazyContact />
                        </React.Suspense>
                        </>
                    }
                    </>
                )
            }
        </>
    );
}

ReactDOM.render(<UnionComponent />, document.getElementById('root'));