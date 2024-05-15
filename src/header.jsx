import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import {  useState } from "react"
import "./header.css"
import ThemeButton from "./components/ThemeButton/ThemeButton"
import Sidebar from "./components/icons/Sidebar"
import { BoxArrow } from "./components/icons/BoxArrow"

export default function Header() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="p-0 mr-0 ml-0 mt-0 fixed-top header" fluid >
            <Row style={{ height: "70px", marginLeft: "0px", marginRight: "0px" }} className="px-2">
                <Col md={1} sm={1} xs={1} className="d-lg-none p-0">
                    <button onClick={handleShow} className="theme-button rounded" >
                        <Sidebar />
                    </button>
                    <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#1f2328", color: "#FFFFFF" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Task Manager</Offcanvas.Title>
                            <ThemeButton />
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
                <Col lg={2} md={4} sm={4} xs={8} className="p-0 mt-3 text-start">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text">LivrosFinder </span> </h3>
                    </Container>
                </Col>
                <Col lg={2} className="d-none d-lg-block text-start p-0 mt-3">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text">Sobre </span></h3>
                    </Container>
                </Col>
                <Col lg={2} className="d-none d-lg-block text-start p-0 mt-3">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text">Buscar </span> </h3>
                    </Container>
                </Col>
                <Col lg={3} className="d-none d-lg-block text-start p-0 mt-3" />
                <Col lg={2} className="d-none d-lg-block text-end p-0 mt-3">
                    <span className="header-text w-auto">
                        <Row className="m-0 p-0 mt-2">
                            <Col lg={8} className="text-end px-2">
                                <h3>Github</h3>
                            </Col>
                            <Col lg={4} className="text-start p-0 mt-1">
                                <BoxArrow />
                            </Col>
                        </Row>
                    </span>
                </Col>
                <Col lg={1} className="d-none d-lg-block text-start">
                    <ThemeButton />
                </Col>
            </Row>

        </Container>
    )
}