import React from 'react';
import MyNavbar from './components/MyNavbar';
import Breadcrumb from './components/Breadcrumb';
import ActivityHead from './components/ActivityHead';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (

     <Router>
      <>
        <MyNavbar />
        <Breadcrumb />
        <ActivityHead />
      </>
    </Router>

  );
}

export default App;
