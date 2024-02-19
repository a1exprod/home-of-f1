/**IMPORTS REACT */
import React from 'react';

//        <CountdownNextEvent />

/**CSS IMPORTS */
import './css/App.css';
import './css/design/navigation.css';
import './css/design/schedule.css';

/**IMPORT COMPONENTS */
import Navbar from './navigation/Navbar'

//Pages
import Home from './pages/Home'
import Schedule from './pages/Schedule'



//Functionallity of Navigation deploys here:
//Footer can be loaded here - it will be displayed on every Page, like Navbar

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/home-of-f1/" exact component={Home} />
          <Route path="/home-of-f1/schedule" component={Schedule} />

        </Switch>
      </>
    </Router>
  );
}
export default App;
