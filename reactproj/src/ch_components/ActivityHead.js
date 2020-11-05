import React, { useState, useEffect } from 'react'
import { FaRegCalendarAlt,FaMapMarkerAlt,FaTags } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import { Button, Tabs, Tab } from 'react-bootstrap';
import Breadcrumb from './Breadcrumb'
import ActivityAttention from './ActivityAttention'
import ActivityInfo from './ActivityInfo'
import ActivityOption from './ActivityOption'



function ActivityHeadTest(props) {
    const [activityData, setActivityData] = useState([])
  
    async function getActivityFromServer() {
      // 連接的伺服器資料網址
      const url = 'http://localhost:5566/activity/api/1'
  
      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      })
  
      const response = await fetch(request)
      const data = await response.json()
      let arr = []
      arr.push(data)
      console.log(arr)
      // 設定資料
      setActivityData(arr)
    }
  
   
  
    // 一開始就會開始載入資料
    useEffect(() => {
        getActivityFromServer()
    }, [])
   
    const display = (
      <>
      <div className="main d-flex">
         {activityData.map((value) => {
            return (

              <div className="introduction" key={value.sid}>
                <h3>{value.activity_name}</h3>
                <span><FaRegCalendarAlt />日期：{value.activity_date}</span>
                <span><FaMapMarkerAlt />地點：{value.activity_location}</span>
                <h5 className="text-head"><FaTags />標籤：
                  <button type="button" className="btn btn-sm btn-outline-warning">講座</button>
                  <button type="button" className="btn btn-sm btn-outline-info">商業</button>
                  <button type="button" className="btn btn-sm btn-outline-danger">教育</button>
                </h5>
              </div>       
              )
            })}
          <div className="option align-self-center">
            <Button variant="secondary" onClick={()=>{props.history.push('/activitymain')}}>選擇方案</Button>
          </div>     
       </div>    
     </>
    )
    
    function ControlledTabs() {
      const [key, setKey] = useState('home');
    
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="nav-pills d-flex justify-content-around"
        >
          <Tab eventKey="home" title="方案票價">
            <ActivityOption/>
          </Tab>
          <Tab eventKey="profile" title="活動內容">
            <ActivityInfo/>
          </Tab>
          <Tab eventKey="contact" title="注意事項">
            <ActivityAttention/>
          </Tab>
        </Tabs>
      );
    }

    return (
      <>
        <Breadcrumb/>
        <img src={"http://localhost:3000/ch_img/activity_demo2.jpg"} className="activitydemo2"/>
        {display}
        <div className="main">
          <ControlledTabs/>
        </div>      
     
      </>
    )
  }
  
  export default withRouter(ActivityHeadTest)

    //         
    //             <div className="main d-flex">
    //                     <div className="introduction">
    //                         <h3>跟上影音新浪潮｜Podcast企劃+影音內容+影音行銷</h3>
    //                         <span><FaRegCalendarAlt />日期：2020/09/17  15:00~17:00</span>
    //                         <span><FaMapMarkerAlt />地點：台北市大安區復興南路一段390號</span>
    //                         <h5 className="text-head"><FaTags />標籤：
    //                             <button type="button" className="btn btn-sm btn-outline-warning">講座</button>
    //                             <button type="button" className="btn btn-sm btn-outline-info">商業</button>
    //                             <button type="button" className="btn btn-sm btn-outline-danger">教育</button>
    //                         </h5>
    //                     </div>
    //                     <div className="option align-self-center">
    //                         <button type="" className="btn btn-secondary">選擇方案</button>
    //                     </div>  
                                  
    //             </div>
    //             <div className="main">
    //                  <div className="pagination d-flex justify-content-around">
    //                     <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/activityoption">方案票價</a></div>
    //                     <div className="text-center this-pag-name"><a className="text-reset text-decoration-none" href="/activityinfo">活動內容</a></div>
    //                     <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/activityattention">注意事項</a></div>
    //                 </div>         
    //             </div>

    //     </>