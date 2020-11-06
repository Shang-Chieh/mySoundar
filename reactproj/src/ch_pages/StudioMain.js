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
          (<img src={"http://localhost:3000/ch_img/s000101.jpg"} className="studio-head-img w-100"/>),
          (<img src={"http://localhost:3000/ch_img/s000102.jpg"} className="studio-head-img w-100"/>),
          (<img src={"http://localhost:3000/ch_img/s000103.jpg"} className="studio-head-img w-100"/>),
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
          <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length}/>
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
              <div className="studio-introduction">
                  <h2>LAZI Corner</h2>
                  <h3 className="text-success">NT$ 500</h3>
                  <span>顧客評價
                  <Rater rating={4.8} total={5} interactive={false}/>
                  4.8(25)</span>
                  <p><FaMapMarkerAlt />地點：台北市大安區復興南路一段390號</p>
                  <Button variant="secondary" className="btn-lg" onClick={()=>{props.history.push('/studiomain')}}>選擇方案</Button>
              </div>
            </div>
            <ControlledTabs/>   
        </>
    )
}

export default withRouter(StudioMain)

                    {/* <div className="img-area">
                         <img src={"http://localhost:3000/ch_img/s000101.jpg"} className="img-demo"/>   
                         <div className="img-wrap d-flex justify-content-between">
                            <MdKeyboardArrowLeft />
                            <img src={"http://localhost:3000/ch_img/s000101.jpg"} className="studio-head-img"/>   
                            <img src={"http://localhost:3000/ch_img/s000102.jpg"} className="studio-head-img"/>   
                            <img src={"http://localhost:3000/ch_img/s000103.jpg"} className="studio-head-img"/> 
                            <MdKeyboardArrowRight />  
                         </div>
                    </div> */}
