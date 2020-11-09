import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { MdAddCircleOutline,MdRemoveCircleOutline } from 'react-icons/md'
import { Button, Accordion, Card } from 'react-bootstrap'

function ActivityOption(props) {
  const [activityData, setActivityData] = useState([])
  const [quantity, setQuantity] = useState(1)

  async function getActivityFromServer() {
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
    setActivityData(arr)
    console.log(activityData.ticket_option)
  } 

  useEffect(() => {
      getActivityFromServer()
  }, [])

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
                <Accordion>                
                    <Card.Header className="d-flex flex-wrap justify-content-between">
                      <span style={{fontSize : '2rem', fontWeight:'bold'}}>NT$ 4000 / 每人</span>
                      <Accordion.Toggle as={Button} eventKey="0" className="btn-select">
                        選擇
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                      <div>
                        <p style={{fontSize: '1.25rem'}} className="mt-4">選擇數量</p>
                        <div className="d-flex justify-content-between counter align-items-center">
                          <span>人數</span>
                          <div className="d-flex justify-content-between align-items-center">
                            <MdRemoveCircleOutline style={{ fontSize: '2rem', color: quantity ==1 ? '#909393' : '#232d2f' }} 
                            onClick={() => {
                              quantity === 1 ?
                              alert('數量不可低於一張')
                              : setQuantity(quantity - 1)
                              }}/>
                            <span style={{ fontSize: '2rem' }}>{quantity}</span>
                            <MdAddCircleOutline style={{ fontSize: '2rem', color: quantity ==3 ? '#909393' : '#232d2f' }} 
                            onClick={() => {
                              quantity === 3 ?
                              alert('每人限購三張')
                              : setQuantity(quantity + 1)
                              }}/>
                          </div>              
                      </div>                      
                      <hr/>
                      <div className="d-flex align-items-center justify-content-end mb-3">
                        <div className="mr-4">總金額</div>
                          <div style={{color:'#2690df', fontWeight:'bold', fontSize:'1.5rem'}}>NT$ {quantity * 4000}</div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button type="button" className="btn btn-option ml-auto" onClick={()=>{props.history.push('/activitycart')}}>立即購票</button>
                        </div>
                      </div>
                      </Card.Body>
                    </Accordion.Collapse>              
                </Accordion>
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