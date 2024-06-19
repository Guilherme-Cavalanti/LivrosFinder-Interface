import "./browse.css"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { Outlet, Link } from "react-router-dom"
import Space from "../../components/Space.jsx"

export default function BrowsePage() {
    return (
        <Container fluid>
            <Row>
                <Col
                    style={{ height: "100%", marginRight: "0", maxWidth: "300px", marginTop: "70px", zIndex: "0" }} lg={3} xl={3}
                    className="d-none d-lg-block  p-0 position-fixed">
                    <ul>
                        <Link to="search">
                            <li className="rounded"> 
                                Pesquisar livros
                            </li>
                        </Link>
                        <Link to="filter">
                            <li className="rounded"> 
                                Filtros
                            </li>
                        </Link>
                    </ul>
                </Col>
                <Col md={12} xl={{ span: 7, offset: 3 }} className="p-0 mainPart" lg={{ span: 9, offset: 3 }} style={{ marginTop: "70px"}}>
                    <Container className="mt-3 p-0" style={{  maxWidth: "900px" }}>
                        <Outlet />
                    </Container>
                </Col>
                <Col className="d-none d-xl-block sideFill" xl={2} style={{ marginRight: "0", marginTop: "70px" }}>
                    <Container style={{ borderLeft: "1px solid #dee2e6", marginTop: "10px" }}>
                        Navegue e acesse os nossos <br />
                        livros por aqui!
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}