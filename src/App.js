/**IMPORTS REACT */
import React from 'react';

//        <CountdownNextEvent />

/**CSS IMPORTS */
import './css/App.css';
import './css/design/navigation.css';
import './css/design/schedule.css';

/**IMPORT COMPONENTS */
import CountdownNextEvent from './components/countdownNextEvent';
import Navbar from './navigation/Navbar'
//Pages
import Home from './pages/Home'
import Schedule from './pages/Schedule'



//Functionallity of Navigation deploys here:
//Footer can be loaded here - it will be displayed on every Page, like Navbar
function App() {

  let page
  switch (window.location.pathname) {
    case "/":
      page = <Home />
      break

    case "/schedule":
      page = <Schedule />
      break

  }


  return (
    <>
      <Navbar />
      {page}
      
    </>
  );
}

export default App;
