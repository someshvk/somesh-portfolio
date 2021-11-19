import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import GlobalStyles from './Styles/GlobalStyles';
import Home from './Components/Home/Home';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

const retry = (fn, ms) => new Promise(resolve => { 
    fn()
      .then(resolve)
      .catch(() => {
        setTimeout(() => {
          console.log('Retrying...');
          retry(fn, ms).then(resolve);
        }, ms);
    })
});
const LazyLoader = React.lazy(() => retry(() => import('./Components/Loader/Loader')));
const LazyTabMenu = React.lazy(() => retry(() => import('./Components/TabsMenu/TabMenu')));
const LazySocials = React.lazy(() => retry(() => import('./Components/Socials/Socials')));
const LazyNavBar = React.lazy(() => retry(() => import('./Components/NavBar/NavBar')));
const LazyAbout = React.lazy(() => retry(() => import('./Components/About/About')));
const LazyWork = React.lazy(() => retry(() => import('./Components/Work/Work')));
const LazyContact = React.lazy(() => retry(() => import('./Components/Contact/Contact')));

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
                    <React.Suspense fallback={<h1>Loading...</h1>}>
                        <LazyLoader />
                    </React.Suspense>
                )
                :
                (
                    <>
                    {
                        isMobile 
                        ?
                        <Router>
                            <React.Suspense fallback={<h1>Loading...</h1>}>
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
                        <React.Suspense fallback={<h1>Loading...</h1>}>
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