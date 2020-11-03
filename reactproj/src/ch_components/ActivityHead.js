import React from 'react'
import activitydemo2 from '../ch_img/activity_demo2.jpg'
import { FaRegCalendarAlt,FaMapMarkerAlt,FaTags } from 'react-icons/fa'



function ActivityHead(props){
    return(
        <>
            <img src={activitydemo2} className="activitydemo2"/>
            {/* <div className="jumbotron jumbotron-fluid"></div> */}
                <div className="main d-flex">
                        <div className="introduction">
                            <h3>跟上影音新浪潮｜Podcast企劃+影音內容+影音行銷</h3>
                            <span><FaRegCalendarAlt />日期：2020/09/17  15:00~17:00</span>
                            <span><FaMapMarkerAlt />地點：台北市大安區復興南路一段390號</span>
                            <h5 className="text-head"><FaTags />標籤：
                                <button type="button" className="btn btn-sm btn-outline-warning">講座</button>
                                <button type="button" className="btn btn-sm btn-outline-info">商業</button>
                                <button type="button" className="btn btn-sm btn-outline-danger">教育</button>
                            </h5>
                        </div>
                        <div className="option align-self-center">
                            <button type="" className="btn btn-secondary">選擇方案</button>
                        </div>  
                                  
                </div>
                <div className="main">
                     <div className="pagination d-flex justify-content-around">
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/activityoption">方案票價</a></div>
                        <div className="text-center this-pag-name"><a className="text-reset text-decoration-none" href="/activityinfo">活動內容</a></div>
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/activityattention">注意事項</a></div>
                    </div>         
                </div>

        </>
    )
}

export default ActivityHead