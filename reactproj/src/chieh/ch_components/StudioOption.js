import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { Button, Collapse } from 'react-bootstrap'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function StudioOption(props) {

  //選擇按鈕切換
  function CancelBtn() {
    const [open, setOpen] = useState(false);

    function DateOption() {
      const [startDate, setStartDate] = useState(new Date());
      return (
        <DatePicker
        selected={startDate} 
        onChange={date => setStartDate(date)}
        dateFormat="yyyy-MM-dd h:mm aa"
        showTimeSelect
        />
      );
    };
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-studio"
          aria-expanded={open}
          className="btn btn-select"
        >
          {open ? '取消選擇' : '選擇'}
        </Button>

        <Collapse in={open}>
          <div id="example-collapse-studio">
            <div className="d-flex justify-content-between counter mt-5">
              <span>選擇日期和時段</span>
              <DateOption style={{fontSize:'1.25rem'}}/>
            </div>            
            <hr/>
            <div className="d-flex align-items-center justify-content-end mb-3">
              <div className="mr-4">總金額</div>
                <div style={{color:'#2690df', fontWeight:'bold', fontSize:'1.5rem'}}>NT$ 500</div>
              </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-option ml-auto" onClick={()=>{props.history.push('/activitycart')}}>立即預訂</button>
            </div>
          </div>
        </Collapse>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="option-item d-flex justify-content-between" >
          <div className="option-content list-unstyled">
            <h4>1小時錄音</h4>
            <li>現場注意事項：</li>
            <li>1.請提早十分鐘在樓下準備並準時上樓</li>
            <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，</li>
            <li>避免影響節目錄製</li>            
         </div>
          <div className="option-action d-flex flex-wrap justify-content-between">
            <span style={{fontSize : '2rem', fontWeight:'bold'}}>NT$ 500</span>
            <CancelBtn />
          </div>
        </div>

        <div className="option-item d-flex justify-content-between" >
          <div className="option-content list-unstyled">
            <h4>1.5小時錄音</h4>
            <li>現場注意事項：</li>
            <li>1.請提早十分鐘在樓下準備並準時上樓</li>
            <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，</li>
            <li>避免影響節目錄製</li>
          </div>
          <div className="option-action d-flex flex-wrap justify-content-between">
            <span style={{fontSize : '2rem', fontWeight:'bold'}}>NT$ 750</span>
            <CancelBtn />
          </div>
        </div>

        <div className="option-item d-flex justify-content-between" >
          <div className="option-content list-unstyled">
            <h4>2小時錄音</h4>
            <li>現場注意事項：</li>
            <li>1.請提早十分鐘在樓下準備並準時上樓</li>
            <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，</li>
            <li>避免影響節目錄製</li>            
          </div>
          <div className="option-action d-flex flex-wrap justify-content-between">
            <span style={{fontSize : '2rem', fontWeight:'bold'}}>NT$ 1000</span>
            <CancelBtn />
          </div>
        </div>
      </div>   
    </>
  )
}

export default withRouter(StudioOption)
