import React from 'react';
import MyNavbar from './ch_components/MyNavbar';
import ActivityMain from './ch_pages/ActivityMain'
import ActivityCart from './ch_pages/ActivityCart'
import ActivityOrder from './ch_pages/ActivityOrder'
import StudioMain from './ch_pages/StudioMain'
import Payment from './ch_pages/Payment'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (

     <Router>
      <>
        <MyNavbar />
        <Switch>
            <Route path="/activitymain">
              <ActivityMain />
            </Route>
            <Route path="/activitycart">
              <ActivityCart />
            </Route>
            <Route path="/activityorder">
              <ActivityOrder />
            </Route>
            <Route path="/studiomain">
              <StudioMain />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
          </Switch>
      </>
    </Router>

  );
}

export default App;
