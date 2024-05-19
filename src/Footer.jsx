import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import "./footer.css"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

export default function Footer() {
    const { darkTheme} = useContext(ThemeContext)
    return (
        <Container style={{ height: "175px", borderTop: "1px solid #dee2e6"}} className={darkTheme ? "footer dark-theme" : "footer light-theme"} fluid>
            <Row className="justify-content-center" style={{ paddingTop:"2%"}}>
                <Col xs={4} className="text-start">
                    <h5><a href="https://pt.wikipedia.org/wiki/Le%C3%A3o-marinho" target="blank" className="text-decoration-underline">Mais </a></h5>
                </Col>
                <Col xs={4} className="text-start">
                    <h5><a href="https://github.com/EdgarLiraa/book_api" target="blank" className="text-decoration-underline">Github </a> </h5>
                </ Col>
            </Row>
        </Container>
    )
}