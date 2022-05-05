import React from 'react'
import { Navbar, Row, Col, Nav, Container } from 'react-bootstrap'
import styles from './styles.module.scss'
const Header = () => {
    return (
        <Container fluid={'lg'}>
            <Row>
                <Col>
                    <Navbar expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">
                            المظلة للخدمات الإلكترونية
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            className="justify-content-end"
                            id="basic-navbar-nav"
                        >
                            <Nav>
                                {/* <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? styles.activeNavItem : styles.navItem
                            }
                        >
                            الرئيسية
                        </NavLink> */}
                                <a
                                    target={'_blank'}
                                    rel="noreferrer"
                                    className={styles.navItem}
                                    href="https://umbrella.ly/about/"
                                    // className={({ isActive }) =>
                                    //     isActive ? styles.activeNavItem : styles.navItem
                                    // }
                                >
                                    حول الشركة
                                </a>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
