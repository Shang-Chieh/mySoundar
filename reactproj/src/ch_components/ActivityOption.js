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
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn btn-success"
        >
          {open ? '取消選擇' : '選擇'}
        </Button>

        <Collapse in={open}>
          <div id="example-collapse-text">
          <p>選擇數量</p>
                  <span>人數</span>
                  <MdRemoveCircleOutline style={{ fontSize: '2rem' }}/>
                  <span>1</span>
                  <MdAddCircleOutline style={{ fontSize: '2rem' }}/>
                  <hr/>
                  <span>總金額</span>
                  <span>NT$ 4000</span>
                  <br/>
                  <button type="button" className="btn btn-secondary" onClick={()=>{props.history.push('/activitycart')}}>立即購票</button>
          </div>
        </Collapse>
      </>
    );
  }

const display = (
  <>
    {activityData.map((value)=>{
      return(
        <div className="option-item d-flex justify-content-between" key={value.sid}>
                <div className="option-content">
                  <h4>{value.ticket_option}</h4>
                  <li>11/30前報名享早鳥優惠價</li>
                  <li>課程附贈教材、午餐、午茶</li>
                  <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
                </div>
                <div className="option-action">
                  <span>NT$ {value.ticket_price} / 每人</span>
                  <CancelBtn />
                </div>
            </div>
      )
    })}        
  </>
)


  return (
    <>
        {display}
        <div className="option-item d-flex justify-content-between">
            <div className="option-content">
              <h4>一般票</h4>
              <li>課程附贈教材、午餐、午茶</li>
              <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
            </div>
            <div className="option-action">
              <span>NT$ 4500 / 每人</span>
              <CancelBtn />
            </div>
        </div>

        <div className="option-item d-flex justify-content-between">
            <div className="option-content">
              <h4>團體票</h4>
              <li>三人團報優惠</li>
              <li>課程附贈教材、午餐、午茶</li>
              <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
            </div>
            <div className="option-action">
              <span>NT$ 4300 / 每人</span>
              <CancelBtn />
             </div>
        </div>
    </>
  )
}

export default withRouter(ActivityOption)

// <div className="option-item d-flex justify-content-between">
//             <div className="option-content">
//               <h4>{activityData[0].ticket_option}</h4>
//               <li>11/30前報名享早鳥優惠價</li>
//               <li>課程附贈教材、午餐、午茶</li>
//               <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
//             </div>
//             <div className="option-action">
//               <span>NT$ {activityData[0].ticket_price} / 每人</span>
//               <button type="button" className="btn btn-success">取消選擇</button>
//               <p>選擇數量</p>
//               <span>人數</span>
//               <MdRemoveCircleOutline />
//               <span>1</span>
//               <MdAddCircleOutline />
//               <hr/>
//               <span>總金額</span>
//               <span>NT$ 4000</span>
//               <br/>
//               <button type="button" className="btn btn-secondary" onClick={()=>{props.history.push('/activitycart')}}>立即購票</button>
//             </div>
//         </div>

//         <div className="option-item d-flex justify-content-between">
//             <div className="option-content">
//               <h4>一般票</h4>
//               <li>課程附贈教材、午餐、午茶</li>
//               <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
//             </div>
//             <div className="option-action">
//               <span>NT$ 4500 / 每人</span>
//               <button type="button" className="btn btn-success">選擇</button>
//             </div>
//         </div>

//         <div className="option-item d-flex justify-content-between">
//             <div className="option-content">
//               <h4>團體票</h4>
//               <li>三人團報優惠</li>
//               <li>課程附贈教材、午餐、午茶</li>
//               <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
//             </div>
//             <div className="option-action">
//               <span>NT$ 4300 / 每人</span>
//               <button type="button" className="btn btn-success">選擇</button>
//              </div>
//         </div>
