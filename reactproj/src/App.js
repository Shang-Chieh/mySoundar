import React from 'react';
import MyNavbar from './chieh/ch_components/MyNavbar';
import ActivityMain from './chieh/ch_pages/ActivityMain'
import ActivityCart from './chieh/ch_pages/ActivityCart'
import ActivityOrder from './chieh/ch_pages/ActivityOrder'
import StudioMain from './chieh/ch_pages/StudioMain'
import Payment from './chieh/ch_pages/Payment'
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
