import React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import StudioHead from '../ch_components/StudioHead'

function StudioOption(props) {
  return (
    <>
      <StudioHead />
        <div className="option-item d-flex justify-content-between">
            <div className="option-content list-unstyled">
              <h4>1小時錄音</h4>
              <li>現場注意事項：</li>
              <li>1.請提早十分鐘在樓下準備並準時上樓</li>
              <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，避免影響 節目錄製</li>
              <p>選擇日期</p>
              <div class="dropdown">
                <a class="btn btn-outline-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  2020-10-30
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
              <p>選擇時段</p>
              <div class="dropdown">
                <a class="btn btn-outline-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  14:00~15:00
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <div className="option-action">
              <span>NT$ 500</span>
              <button type="button" className="btn btn-success">取消選擇</button>
              <br/>
              <span>確認</span>
              <span>2020-10-30</span>
              <span>14:00-15:00</span>
              <hr/>
              <span>總金額</span>
              <span>NT$ 500</span>
              <br/>
              <button type="button" className="btn btn-secondary">立即預訂</button>
            </div>
        </div>

        <div className="option-item d-flex justify-content-between">
            <div className="option-content list-unstyled">
              <h4>1.5小時錄音</h4>
              <li>現場注意事項：</li>
              <li>1.請提早十分鐘在樓下準備並準時上樓</li>
              <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，避免影響 節目錄製</li>
            </div>
            <div className="option-action">
              <span>NT$ 750</span>
              <button type="button" className="btn btn-success">選擇</button>
            </div>
        </div>

        <div className="option-item d-flex justify-content-between">
            <div className="option-content list-unstyled">
              <h4>2小時錄音</h4>
              <li>現場注意事項：</li>
              <li>1.請提早十分鐘在樓下準備並準時上樓</li>
              <li>2.下一組預定來賓有權準時進入，請準時結束使用空間，避免影響 節目錄製</li>
            </div>
            <div className="option-action">
              <span>NT$ 1000</span>
              <button type="button" className="btn btn-success">選擇</button>
            </div>
        </div>

        
    </>
  )
}

export default withRouter(StudioOption)