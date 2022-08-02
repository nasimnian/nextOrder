import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../styles/navbar.module.css'
import Badge from '@material-ui/core/Badge';
import { ShoppingCart } from '@material-ui/icons'

export default function NavbarPage() {
  return (
    <div className={style.main}>

       <div>
        <ul className={style.ListOfUl}>
          <li>
            ورود/ثبت‌نام
          </li>
          <li>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart color="action" />
          </Badge>
          </li>
        </ul>
      </div>
      <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"white"}}>
        <Container style={{direction:"rtl"}}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">تمامی محصولات</Nav.Link>
              <Nav.Link href="#features">شلوار</Nav.Link>
              <Nav.Link href="#features">کفش</Nav.Link>
              <Nav.Link href="#features">عینک</Nav.Link>
              <Nav.Link href="#features">تیشرت</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
