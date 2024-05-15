import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import "./footer.css"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

export default function Footer() {
    const { darkTheme} = useContext(ThemeContext)
    return (
        <Container style={{ height: "350px", borderTop: "1px solid #dee2e6"}} className={darkTheme ? "footer dark-theme" : "footer light-theme"} fluid>
            <Row className="justify-content-center" style={{minWidth:"400px", paddingTop:"2%"}}>
                <Col xs={4} className="text-start">
                    <h4>Sobre</h4>
                    <p>
                        Esse website foi desenvolvido usando ReactJS, acessa uma API que retorna dados sobre livros disponíveis em dominio público.
                    </p>
                </Col>
                <Col xs={4} className="text-start">
                    <h4>Github:</h4>
                    <p>
                        Confira mais sobre o código nesse repositório:
                    </p>
                    <p>
                        dasdasdasda.com
                    </p>
                </ Col>
            </Row>
        </Container>
    )
}