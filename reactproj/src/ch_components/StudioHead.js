import React from 'react'
import Breadcrumb from './Breadcrumb'
import { FaMapMarkerAlt } from 'react-icons/fa'
import s000101 from '../ch_img/S000101.jpg'
import s000102 from '../ch_img/S000102.jpg'
import s000103 from '../ch_img/S000103.jpg'
import s000104 from '../ch_img/S000104.jpg'



function StudioHead(props){
    return(
        <>
            <Breadcrumb />
                <div className="main d-flex">
                    <div>
                         {/* <img src={s000101} className="studio-head-img"/> */}   
                         {/* <img src={s000101} className="studio-head-img"/> */}   
                         {/* <img src={s000102} className="studio-head-img"/> */}   
                         {/* <img src={s000103} className="studio-head-img"/> */}   
                    </div>
                    <div>
                        <h2>LAZi Corner</h2>
                        <h3>NT$ 500</h3>
                        <span>顧客評價****4.8(25)</span>
                        <p><FaMapMarkerAlt />地點：台北市大安區復興南路一段390號</p>
                        <button type="" className="btn btn-secondary">選擇方案</button>
                    </div>
                </div>
                <div className="main">
                     <div className="pagination d-flex justify-content-around">
                        <div className="text-center pag-name"><a className="text-reset text-decoration-none" href="/studiooption">方案</a></div>
                        <div className="text-center this-pag-name"><a className="text-reset text-decoration-none" href="/studioinfo">介紹</a></div>
                    </div>         
                </div>

        </>
    )
}

export default StudioHead