import React from 'react'
import activitydemo2 from '../img/activity_demo2.jpg'


function ActivityHead(props){
    return(
        <>
            <img src={activitydemo2} className="activitydemo2"/>
            {/* <div className="jumbotron jumbotron-fluid"></div> */}
                <div className="main">
                        <div className="introduction">
                            <h3>跟上影音新浪潮｜Podcast企劃+影音內容+影音行銷</h3>
                            <span>日期：2020/09/17  15:00~17:00</span>
                            <span>地點：台北市大安區復興南路一段390號</span>
                        </div>
                        <div className="option">
                            <button className="btn btn-secondary">選擇方案</button>
                        </div>                        
                </div>  
        </>
    )
}

export default ActivityHead