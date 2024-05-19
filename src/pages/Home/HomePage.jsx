import "./HomePage.css"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/Button"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const { darkTheme} = useContext(ThemeContext)
    const nav = useNavigate()
    return (
        <div style={{ width: "100%" }} className="HomePage">
            <Container className={darkTheme ? "front p-0 dark-theme" : "front p-0 light-theme"} fluid>
                <Row style={{ marginBottom: "10px", paddingTop: "75px" }} className="text-center m-0">
                    <Col lg={3} md={2} className="d-none d-md-block" />
                    <Col lg={6} md={8} sm={12} xs={12}>
                        <h1>Livros Finder</h1>
                    </Col>
                    <Col lg={3} md={2} className="d-none d-md-block" />
                </Row>
                <Row style={{ marginBottom: "10px" }} className="text-center m-0 mb-3">
                    <Col lg={3} md={2} className="d-none d-md-block" />
                    <h3>Encontre Livros Gratuitos!</h3>
                    <Col lg={3} md={2} className="d-none d-md-block" />
                </Row>
                <Row style={{ marginBottom: "10px" }} className="m-0 mb-3">
                    <Col xs={6} sm={6} className="text-end">
                        <Button onClick={()=>nav("/browse")}>Buscar</Button>
                    </Col>
                    <Col xs={6} sm={6} className="text-start">
                        <Button onClick={()=>nav("/about")}>Sobre</Button>
                    </Col>
                </Row>
                <Row className="text-center m-0 mb-3">
                    <p>Divirta-se!</p>
                </Row>
            </Container>
            <Container fluid >
                <Row style={{ marginTop: "20px", paddingTop: "2%", paddingBottom: "4%" }} className="justify-content-center">
                    <Col lg={{ span: 3, offset: 0 }} md={12} className="text-start">
                        <Container >
                            <h3>Busque por livros!</h3>
                            <p>
                                Procure qualquer livro que esteja interessado, se estiver disponível em dominio público, você o encontrará.

                            </p>
                            <p>
                                Não perca mais tempo procurando aquele livro que está interessado e comece a ler agora mesmo!
                            </p>
                        </Container>
                    </Col>
                    <Col lg={3} md={12} className="text-start">
                        <Container>
                            <h3>Explore nosso repositório!</h3>
                            <p>
                                Procure algo para ler, busque livros por ano, gênero, autor, língua, entre outros.
                            </p>
                            <p>
                                Nossa ferramenta de busca lhe trará um acesso rápido e simplificado à uma alta gama de livros.
                            </p>
                        </Container>
                    </Col>
                    <Col lg={3} md={12} className="text-start">
                        <Container >
                            <h3>Não encontrou o que queria?</h3>
                            <p>
                                Nosso repositório trabalha apenas com livros disponíveis publicamente e gratuitamente na internet.
                            </p>
                            <p>
                                Envie sugestões diretamente para o nosso e-mail e ajude-nos a expandir nossa coleção de obras disponíveis.
                            </p>
                        </Container>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}