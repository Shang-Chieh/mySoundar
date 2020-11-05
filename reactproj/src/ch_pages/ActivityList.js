import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'



function ActivityList(props){
    return(
        <>
            <img src={"http://localhost:3000/ch_img/jumbotron01.jpg"} className="jumbotron01"/>
            <div className="main">
                <div className="search">搜尋</div>
                <div className="pagination d-flex justify-content-around">
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="">錄音設備</a></div>
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="">播客周邊</a></div>
                        <div className="text-center this-pag-name"><a className="text-reset text-decoration-none" href="/activitylist">線下活動</a></div>
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/studiolist">錄音室租借</a></div>
                </div>
            </div>
            <div className="main d-flex">
                <div className="category">
                    <h4>分類</h4>
                    <h5>錄音設備(42)</h5>
                    <h5>播客周邊(42)</h5>
                    <h5>線下活動(56)</h5>
                    <h5>錄音室租借(10)</h5>
                </div>
                <div className="list">
                    <h2>精彩活動</h2>
                    <div className="d-flex">
                       <span>排序</span>
                        <div class="dropdown">
                            <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                價格由低到高
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="">最新上架</a>
                                <a class="dropdown-item" href="">價格由低到高</a>
                            </div> 
                         </div>                 
                    </div>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                <a href="/activityoption" className="btn btn-primary">立即購票</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                {/* <a href="/activityoption" className="btn btn-primary">立即購票</a> */}
                            </div>
                        </div>
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                {/* <a href="/activityoption" className="btn btn-primary">立即購票</a> */}
                            </div>
                        </div>
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                {/* <a href="/activityoption" className="btn btn-primary">立即購票</a> */}
                            </div>
                        </div>
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                {/* <a href="/activityoption" className="btn btn-primary">立即購票</a> */}
                            </div>
                        </div>
                        <div className="card">
                            <img src={"http://localhost:3000/ch_img/activitydemo2.jpg"} className="card-img-top" alt="" />
                            <div className="card-body">
                                <p className="card-text">2020/09/17</p>
                                <h5 className="card-title">跟上影音新浪潮｜Podcast企劃</h5>
                                <p>NT$ 3000</p>
                                {/* <a href="/activityoption" className="btn btn-primary">立即購票</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ActivityList