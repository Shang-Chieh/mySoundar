import React from 'react'
import Breadcrumb from './Breadcrumb'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { RiStarFill,RiStarHalfFill } from 'react-icons/ri'


function StudioHead(props){
    return(
        <>
            <Breadcrumb />
                <div className="main d-flex">
                    <div className="img-area">
                         <img src={"http://localhost:3000/ch_img/s000101.jpg"} className="img-demo"/>   
                         <div className="img-wrap d-flex justify-content-between">
                            <MdKeyboardArrowLeft />
                            <img src={"http://localhost:3000/ch_img/s000101.jpg"} className="studio-head-img"/>   
                            <img src={"http://localhost:3000/ch_img/s000102.jpg"} className="studio-head-img"/>   
                            <img src={"http://localhost:3000/ch_img/s000103.jpg"} className="studio-head-img"/> 
                            <MdKeyboardArrowRight />  
                         </div>
                    </div>
                    <div className="studio-introduction">
                        <h2>LAZI Corner</h2>
                        <h3 className="text-success">NT$ 500</h3>
                        <span>顧客評價
                        <RiStarFill className="text-yellow"/>
                        <RiStarFill className="text-yellow"/>
                        <RiStarFill className="text-yellow"/>
                        <RiStarFill className="text-yellow"/>
                        <RiStarHalfFill className="text-yellow"/>
                        4.8(25)</span>
                        <p><FaMapMarkerAlt />地點：台北市大安區復興南路一段390號</p>
                        <button type="" className="btn btn-secondary btn-lg">選擇方案</button>
                    </div>
                </div>

                <div className="studio-pagination d-flex justify-content-between">
                    <div className="text-center s-pag-name"><a className="text-reset text-decoration-none" href="/studiooption">方案</a></div>
                    <div className="text-center this-s-pag-name"><a className="text-reset text-decoration-none" href="/studioinfo">介紹</a></div>
                    <div className="text-center s-pag-name"><a className="text-reset text-decoration-none" href="">評價</a></div>
                </div>    
   
        </>
    )
}

export default StudioHead