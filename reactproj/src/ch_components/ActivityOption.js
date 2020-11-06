import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { MdAddCircleOutline,MdRemoveCircleOutline } from 'react-icons/md'
import { Button, Collapse } from 'react-bootstrap'

function ActivityOption(props) {
  // const [ activityData, setActivityData] = useState([
  //  {
  //    sid: 1,
  //    activity_category: 1,
  //    activity_name: "跟上影音新浪潮｜Podcast企劃+影音內容+影音行銷",
  //    activity_img: "http://localhost:3000/ch_img/activity_demo.jpg",
  //    activity_content: "影音內容將為品牌帶來流量高峰，品牌如何做好影片、踏入Podcast？為品牌創造聲量、讓內容變現，跨足行銷新藍海！➤ 從企劃到行銷，建立「影」、「音」內容的立體觀，設計互動橋段➤ 定義影音架構與獨特風格，從內容吸住對的人，產生口碑擴散 適合對象: 品牌經營者、數位行銷人、影音廣告者",
  //    activity_location: "台北市大安區復興南路一段359號",
  //    location_category: "北部",
  //    activity_date: "2020/09/17 15:00~17:00",
  //    ticket_stock: 10,
  //    ticket_option: "早鳥票",
  //    ticket_price: 4000,
  //    ticket_id: "T0001F",
  //  }
  // ])

  const [activityData, setActivityData] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getActivityFromServer() {
    // 開啟載入指示
    setDataLoading(true)

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
    console.log(activityData.ticket_option)
  }

 

  // 一開始就會開始載入資料
  useEffect(() => {
      getActivityFromServer()
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 300)
  }, [activityData])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

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
          選擇
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
