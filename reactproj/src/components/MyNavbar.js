import React from 'react'
import {
  Navbar,
  Nav,
} from 'react-bootstrap'

import logofordark from './logofordark.svg'

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
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            {/* 若沒有加exact(精確),默認只要有/都是首頁 */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/todo">
              待辦事項
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              產品
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
