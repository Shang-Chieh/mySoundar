import React, { useState, useEffect } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { withRouter } from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import Breadcrumb from '../ch_components/Breadcrumb'
import StudioInfo from '../ch_components/StudioInfo'
import StudioOption from '../ch_components/StudioOption'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Button, Tabs, Tab } from 'react-bootstrap';


function StudioMain(props){
    const [studioData, setStudioData] = useState([])  
    async function getStudioFromServer() {
      // 連接的伺服器資料網址
      const url = 'http://localhost:5566/studio/api/1'  
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
      setStudioData(arr)
    }
  
    // 一開始就會開始載入資料
    useEffect(() => {
        getStudioFromServer()
    }, [])
  
  const display= (
    <>
      { studioData.map((value=>{
        return (
          <div className="studio-introduction" key={value.sid}>
            <h2>{value.studio_name}</h2>
            <h3 className="text-success">NT$ {value.studio_price}</h3>
            <span>顧客評價
            <Rater rating={4.5} total={5} interactive={false}/>
            {value.studio_review}(25)</span>
            <p><FaMapMarkerAlt />地點：{value.studio_location}</p>
            <Button variant="secondary" className="btn-lg" onClick={()=>{props.history.push('/studiomain')}}>選擇方案</Button>
          </div>
        )
      }))}
    </>
  )




  //圖片切換
  class MyCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          (<img src={"http://localhost:3000/ch_img/s000101.jpg"} className="img-demo"/>),
          (<img src={"http://localhost:3000/ch_img/s000102.jpg"} className="img-demo"/>),
          (<img src={"http://localhost:3000/ch_img/s000103.jpg"} className="img-demo"/>),
        ],
        thumbnails: [
          (<img src={"http://localhost:3000/ch_img/s000101.jpg"} className="studio-img w-100"/>),
          (<img src={"http://localhost:3000/ch_img/s000102.jpg"} className="studio-img w-100"/>),
          (<img src={"http://localhost:3000/ch_img/s000103.jpg"} className="studio-img w-100"/>),
        ],
      }
      this.onchange = this.onchange.bind(this);
    } 
  
    onchange(value) {
      this.setState({ value });
    }
  
    render() {
      return (
      <div className="img-area">
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <div className="img-wrap d-flex">
          <span><MdKeyboardArrowLeft /></span>
          <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
          <span><MdKeyboardArrowRight /></span> 
        </div>
      </div>
      );
    }
  }

    //方案,介紹,評價分頁切換
    function ControlledTabs() {
        const [key, setKey] = useState('option');      
        return (
          <Tabs
            id="controlled-tab-studio"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="nav-pills-studio d-flex justify-content-around bg-dark"
          >
            <Tab eventKey="option" title="方案">
                <div className="main"><StudioOption /></div>                
            </Tab>
            <Tab eventKey="info" title="介紹">
                <StudioInfo />              
            </Tab>
            <Tab eventKey="evaluation" title="評價">
            <div className="main"><h1>評價</h1></div>
            </Tab>
          </Tabs>
        );
      }

    return(
        <>
            <Breadcrumb />
            <div className="main d-flex">
              <MyCarousel />
              {display}
            </div>
            <ControlledTabs/>   
        </>
    )
}

export default withRouter(StudioMain)

