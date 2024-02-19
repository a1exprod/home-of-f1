/**IMPORTS REACT */
import React from 'react';

// CSS IMPORTS
import '../css/App.css';
import '../css/design/navigation.css'; 
import '../css/design/countdown.css'; 
import '../css/design/news.css'; 

// IMPORT COMPONENTS
import CountdownNextEvent from '../components/countdownNextEvent'; 



export default function Home() {
    return (
        <>
            <h1>Home of Formula uno</h1>
            <CountdownNextEvent />



        </>
    );
}
