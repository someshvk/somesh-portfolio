import React, {useState} from 'react';
import './tabsMenu.css';
import {Link} from 'react-router-dom';
import logo from '../../SVG/Vector.svg';
import { useLocation } from 'react-router-dom';

const TabMenu = () => {
    // If you used useLocation in index.js it will result in undefined error because you are calling useLocation
    // before even a component is rendered.
    const location = useLocation();

    const [tabState, setTabState] = useState(location.pathname);
    const tabsItem = [
        {id: 1, title: 'Home', value:'/home'}, 
        {id: 2, title: 'About', value:'/about'},
        {id: 3, title: 'Work', value:'/work'},
        {id: 4, title: 'Contact', value:'/contact'}
    ];
    return (
        <section className="tabsGrid">
            <div className="tabs logo"><img src={logo} alt="logo"></img></div>
            <ul>
            {
                tabsItem.map((tab, index) => {
                    return (
                        <Link key={index} to={tab.value} style={{ textDecoration: 'none' }}>
                            <li className={tab.value === tabState ? 'tabs active' : 'tabs'} onClick={()=>setTabState(tab.value)}>{tab.title}</li>
                        </Link>
                    );
                })
            }
            </ul>
        </section>
    );
}

export default TabMenu;