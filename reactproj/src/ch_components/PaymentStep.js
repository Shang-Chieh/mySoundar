import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import MyNavbar from './MyNavbar'
import gift from '../ch_img/gift.svg'
import method from '../ch_img/method.svg'
import delivery from '../ch_img/delivery.svg'
import { IoIosArrowForward } from 'react-icons/io'


function Payment(props){
    return(
        <>
            <MyNavbar />
            <div className="container step-wrap d-flex align-items-center">
                <div className="step-box d-flex justify-content-center flex-wrap">
                    <img src={method}/>
                    <p>付款資訊</p>
                </div>
                <IoIosArrowForward/>
                <div className="step-box d-flex justify-content-center flex-wrap">
                    <img src={delivery}/>
                    <p>收件資料</p>
                </div> 
                <IoIosArrowForward/> 
                <div className="step-box d-flex justify-content-center flex-wrap">
                    <img src={gift}/>
                    <p>訂購成功</p>
                </div>                    
            </div>
        </>
    )
}

export default withRouter(Payment)
