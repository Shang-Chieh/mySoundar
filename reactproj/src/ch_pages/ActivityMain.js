import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import MyNavbar from '../ch_components/MyNavbar'
import ActivityHead from '../ch_components/ActivityHead'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




function ActivityMain(props) {
   
  
    return (
 
        <Router>
        <>
            <MyNavbar />
            <ActivityHead />
        </>
        </Router>

    )
  }
  
  export default withRouter(ActivityMain)

