import React, { useState, useEffect } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
// import { Button, Tabs, Tab } from 'react-bootstrap';



function OptionCard(props) {
    const [activityData, setActivityData] = useState([])
    // const [dataLoading, setDataLoading] = useState(false)
  
    async function getActivityFromServer() {
      // 開啟載入指示
      // setDataLoading(true)
  
      // 連接的伺服器資料網址
      const url = 'http://localhost:5566/activity/api/1'
  
      // 注意header資料格式要設定，伺服器才知道是json格式
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
      
         {activityData.map((value) => {
            return (
                <div className="option-card" key={value.sid}>
                    <h5>{value.activity_name}</h5>
                    <p className="text-card"><FaRegCalendarAlt />{value.activity_date}</p>
                    {/* <p className="text-card">15:00~17:00</p> */}
                    <button type="" className="btn btn-secondary" onClick={()=>{props.history.push('/activitymain')}}>選擇方案</button>
                </div>    
              )
            })}
   
     </>
    )
    
    

    return (
      <>
        {display}
      </>
    )
  }
  
  export default withRouter(OptionCard)
