import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { MdAddCircleOutline,MdRemoveCircleOutline } from 'react-icons/md'
import { Button, Collapse } from 'react-bootstrap'

function ActivityOption(props) {
  const [activityData, setActivityData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

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
    console.log(activityData.ticket_option)
  } 

  // 一開始就會開始載入資料
  useEffect(() => {
      getActivityFromServer()
  }, [])

  function CancelBtn() {
    const [open, setOpen] = useState(false);
    const [total, setTotal] = useState(0);    

    //選擇票券數量
    function updateTotal(value) {
      setTotal(total + value)
    }


    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn btn-select"
        >
          {open ? '取消選擇' : '選擇'}
        </Button>

        <Collapse in={open}>
          <div id="example-collapse-text">
            <p style={{fontSize: '1.25rem'}} className="mt-4">選擇數量</p>
            <div className="d-flex justify-content-between counter align-items-center">
              <span>人數</span>
              <div className="d-flex justify-content-between align-items-center">
                <MdRemoveCircleOutline style={{ fontSize: '2rem' }} onClick={() => updateTotal(1)}/>
                <span style={{ fontSize: '2rem' }}>1</span>
                {/* <span>{total}</span> */}
                <MdAddCircleOutline style={{ fontSize: '2rem' }} onClick={() => updateTotal(-1)}/>
              </div>              
            </div>
            
            <hr/>
            <div className="d-flex align-items-center justify-content-end mb-3">
              <div className="mr-4">總金額</div>
                <div style={{color:'#2690df', fontWeight:'bold', fontSize:'1.5rem'}}>NT$ 4000</div>
                {/* <span>NT$ {totale*4000}</span> */}
              </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-option ml-auto" onClick={()=>{props.history.push('/activitycart')}}>立即購票</button>
            </div>
          </div>
        </Collapse>
      </>
    );
  }

  const display = (
    <>
        {activityData.map((value)=>{
          return (
            <div className="container" key={value.sid}>
            {value.ticket_option.split(',').map((option, index)=>{
              return (
              <div className="option-item d-flex justify-content-between" >
                <div className="option-content">
                  <h4 key={index}>{option}</h4>
                  <li>11/30前報名享早鳥優惠價</li>
                  <li>課程附贈教材、午餐、午茶</li>
                  <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
                </div>
                <div className="option-action d-flex flex-wrap justify-content-between">
                  <span style={{fontSize : '2rem', fontWeight:'bold'}}>NT$ 4500 / 每人</span>
                  <CancelBtn />
                </div>
              </div>)
            })}
            
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

export default withRouter(ActivityOption)