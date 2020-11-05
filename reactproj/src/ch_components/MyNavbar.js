import React from 'react'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'

import logofordark from '../ch_svg/logofordark.svg'

//選單連結要使用NavLink來取代Link,這個元件是特別針對像選單項目這種導覽所設計的,會有active點亮的效果(被點按到時的特定css)
import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img src={logofordark}  height="15rem" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            <Nav.Link as={NavLink} to="/activitylist" >
              活動列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/activitymain">
              活動
            </Nav.Link>
            <Nav.Link as={NavLink} to="/activitycart">
              活動結帳
            </Nav.Link>
            <Nav.Link as={NavLink} to="/activityorder">
              活動訂單查詢
            </Nav.Link>
            <Nav.Link as={NavLink} to="/studiolist" >
              場地列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/studioinfo">
              場地
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
