import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { onLogout, keepLogin, cookieChecked } from '../actions';
import image1 from '../images/logo.png';

const cookies = new Cookies();

class Header extends Component {

    componentWillMount() {
        const cookieNya = cookies.get('BertasbihCat');
        if(cookieNya !== undefined) {
            this.props.keepLogin(cookieNya);
        }
        else {
            this.props.cookieChecked();
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.auth.username === "") {
            cookies.remove('BertasbihCat');
        }
    }

    onLogOutClick = () => {
        this.props.onLogout();
    }

    renderNavbar = () => {
        if(this.props.auth.username !== "") {
            return (
            <Navbar fixedTop={true} inverse collapseOnSelect color="light" light expand="md">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><img src={image1}height="80px" width="140px"></img ></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/">Album List</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/movielist">Movie List</Link>
                        </NavItem>
                        <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><i className="	fa fa-laptop"></i>Laptop & Aksesoris</MenuItem>
                            <MenuItem eventKey={3.2}>Kancut</MenuItem>
                            <MenuItem eventKey={3.3}>Sempak</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Kutang</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        {/* <NavItem eventKey={1} href="#">
                            Hello, {this.props.auth.username}
                        </NavItem> */}
                        <NavDropdown eventKey={4} title={"Hello, " + this.props.auth.username} id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>Profile</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={4.2} onSelect={this.onLogOutClick}>Log Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>);
        }

        return (<Navbar fixedTop={true} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to="/"><img src={image1}height="80px" width="140px"></img ></Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1}>
                        <Link to="/albumlist">Album List</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/movielist">Movie List</Link>
                    </NavItem>
                    <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><i className="	fa fa-laptop"></i>Laptop & Aksesoris</MenuItem>
                        <MenuItem eventKey={3.2}>Kancut</MenuItem>
                        <MenuItem eventKey={3.3}>Sempak</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Kutang</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Link to="/login">Login</Link>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Link to="/register">Register</Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);
    }
    render() {
        return( 
            this.renderNavbar()
        );
    }
}

const mapStateToProps = (state) => {
    const auth = state.auth;

    return { auth };
}

export default connect(mapStateToProps, { onLogout, keepLogin, cookieChecked })(Header);

// connect = (fnMap, objActionCreator) => {
//     var globalState = getGlobalState();
//     var objProps = fnMap(globalState);

//     return (className) => {
//         var obj = new className();
//         for props in objProps {
//             obj.props[props] = objProps[props];
//         }
//         for props in objActionCreator {
//             obj.props[props] = objActionCreator[props];
//         }
//     };
// }