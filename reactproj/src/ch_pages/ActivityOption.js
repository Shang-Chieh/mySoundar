import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import ActivityHead from '../ch_components/ActivityHead'
import Breeadcrumb from '../ch_components/Breadcrumb'
import { MdAddCircleOutline,MdRemoveCircleOutline } from 'react-icons/md'

function ActivityOption(props) {
  return (
    <>
      <Breeadcrumb />
      <ActivityHead />
        <div className="option-item d-flex justify-content-between">
            <div className="option-content">
              <h4>早鳥票</h4>
              <li>9/10前報名享早鳥優惠價</li>
              <li>課程附贈教材、午餐、午茶</li>
              <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
            </div>
            <div className="option-action">
              <span>NT$ 4000 / 每人</span>
              <button type="button" className="btn btn-success">取消選擇</button>
              <p>選擇數量</p>
              <span>人數</span>
              <MdRemoveCircleOutline />
              <span>1</span>
              <MdAddCircleOutline />
              <hr/>
              <span>總金額</span>
              <span>NT$ 4000</span>
              <br/>
              <button type="button" className="btn btn-secondary">立即購票</button>
            </div>
        </div>

        <div className="option-item d-flex justify-content-between">
            <div className="option-content">
              <h4>一般票</h4>
              <li>課程附贈教材、午餐、午茶</li>
              <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
            </div>
            <div className="option-action">
              <span>NT$ 4000 / 每人</span>
              <button type="button" className="btn btn-success">選擇</button>
            </div>
        </div>

        <div className="option-item d-flex justify-content-between">
            <div className="option-content">
              <h4>團體票</h4>
              <li>課程附贈教材、午餐、午茶</li>
              <li>每堂贈送《數位時代》三期 (課程隔月號起算)</li>            
            </div>
            <div className="option-action">
              <span>NT$ 4000 / 每人</span>
              <button type="button" className="btn btn-success">選擇</button>
             </div>
        </div>
    </>
  )
}

export default withRouter(ActivityOption)
