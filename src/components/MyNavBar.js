import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


class MyNavbar extends React.Component {
  render() {
    const buildNavbar = () => (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Your Restaurant</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/menu'>Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/specials'>Specials</NavLink>
          </NavItem>
        </Nav>
    );
    return (
        <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Your Restaurant</NavbarBrand>
            {buildNavbar()}
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
