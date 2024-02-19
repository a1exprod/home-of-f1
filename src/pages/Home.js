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
    console.log("Renderd Countodwn in home");
    return (
        <>
            <h1>Home of Formula 1 44</h1>
            <CountdownNextEvent />
            



        </>
    );
}
