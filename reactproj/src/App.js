import React from 'react';
import MyNavbar from './ch_components/MyNavbar';
import ActivityInfo from './ch_pages/ActivityInfo'
import ActivityAttention from './ch_pages/ActivityAttention'
import ActivityOption from './ch_pages/ActivityOption'
import ActivityList from './ch_pages/ActivityList'
import ActivityCart from './ch_pages/ActivityCart'
import ActivityOrder from './ch_pages/ActivityOrder'
import StudioList from './ch_pages/StudioList'
import StudioOption from './ch_pages/StudioOption'
import StudioInfo from './ch_pages/StudioInfo'
import Payment from './ch_pages/Payment'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (

     <Router>
      <>
        <MyNavbar />
        <Switch>
            <Route path="/activityinfo">
              <ActivityInfo />
            </Route>
            <Route path="/activityattention">
              <ActivityAttention />
            </Route>
            <Route path="/activityoption">
              <ActivityOption />
            </Route>
            <Route path="/activitylist">
              <ActivityList />
            </Route>
            <Route path="/activitycart">
              <ActivityCart />
            </Route>
            <Route path="/activityorder">
              <ActivityOrder />
            </Route>
            <Route path="/studiolist">
              <StudioList />
            </Route>
            <Route path="/studiooption">
              <StudioOption />
            </Route>
            <Route path="/studioinfo">
              <StudioInfo />
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
