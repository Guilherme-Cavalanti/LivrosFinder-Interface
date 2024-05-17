import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

export default function AboutPage() {
    return (
        <div style={{ width: "100%" }}>
            <Container className="p-5" style={{ minWidth: "400px" }} fluid>
                <Row style={{ marginTop: "70px" }}>
                    <Col lg={{ span: 5, offset: 1 }} md={12} className="text-start">
                        <h2>Projeto</h2>
                        <p>Este site foi desenvolvido como parte fundamental de projeto da disciplina “ACH2066 - Tópicos Especiais em Banco de Dados”,
                            ministrada pelo professor Luciano Vieira de Araújo, do curso de Sistemas de Informação da Universidade de São Paulo, no primeiro semestre do ano de 2024.
                        </p>
                        <p>Ele representa o resultado do esforço e aprendizado de um grupo de estudantes que se empenharam em aplicar os conhecimentos adquiridos ao longo do curso</p>
                    </Col>
                    <Col lg={5} md={12} className="text-start">
                        <h2>Direitos</h2>
                        <p>O site aqui apresentado não tem fins lucrativos, tem o intuito exclusivo de cumprir objetivos
                            acadêmicos, informativos ou educacionais, e não tem a intenção de infringir qualquer direito autoral.
                        </p>
                        <p>Caso você seja detentor de direitos autorais de qualquer material exibido neste site e acredite que houve uma utilização
                            inadequada, pedimos que entre em contato conosco imediatamente para que possamos abordar a questão de forma apropriada.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className="p-5" style={{ minWidth: "400px" }} fluid>
                <Row>
                    <Col lg={{ span: 5, offset: 1 }} md={12} className="text-start">
                        <h2>Membros</h2>
                        <p>
                            Os alunos responsáveis por este projeto são:
                        </p>
                        <p>
                            Edgar Henrique de Oliveira Lira - Número USP: 12717266 - email: edgar.lira@usp.br <br />
                            Guilherme Cavalanti Gomes - Número USP: 11844788 - email: guilhermecavalanti@gmail.com <br />
                            Guilherme José da Silva Nascimento - Número USP: 12543252 - email: guilherme41@usp.br <br />
                            Gustavo Jun Nagatomo - Número USP: 12542571 - email: gustavonagatomo@usp.br <br />
                            Pedro Augusto de Melo Delamura Soares - Número USP: 12542800 - email: pedrodelamura@gmail.com <br />
                        </p>
                    </Col>
                    <Col lg={5} md={12} className="text-start">
                        <h2>Código</h2>
                        <p>Todo o código utilizado nesta aplicação está disponível em um repositório no github, para acessá-lo
                            <a href="https://www.github.com" target="blank" className="text-decoration-underline"> clique aqui</a>.
                        </p>
                        <p>
                            Et similique minima qui excepturi ipsum nam possimus laborum et porro velit vel dolore atque id totam sunt.
                            Qui neque unde eum fugiat distinctio est velit laudantium ut alias molestiae ut voluptate consectetur.
                            <br/> 
                            Não é possível utilizar este site sem um servidor funcional com os dados necessários.
                        </p>
                    </Col>
                </Row>
            </Container>
        </ div>
    )
}