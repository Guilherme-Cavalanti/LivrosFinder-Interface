import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RedirectButton from "../RedirectButton/RedirectButton";

export default function BookDisplay(props) {
    const [books, setBooks] = useState([])
    useEffect(() => {
        setBooks(props.books)
    }, [props.books])

    useEffect(() => {
        console.log(books)
    }, [books])

    return (
        <Container fluid className="mt-3">
            {books.map(book => {
                return (
                    <Container className="border" style={{ padding: "16px" }} fluid key={book["ID"]}>
                        <Row className="p-0 m-0">
                            <Col sm={4} xs={4} md={4} lg={3} className="align-items-center">
                                <img
                                    src={`https://4064-189-121-203-44.ngrok-free.app/proxy?url=${book["Coverurl"]}`}
                                    // height="100px"
                                    width={"50%"}
                                    style={{ minWidth: "100px" }}
                                    alt={`Cover of ${book["Title"]}`}
                                />
                            </Col>
                            <Col sm={8} xs={8} md={8} lg={9}>
                                <Link to={`/browse/book?id=${book["ID"]}`}>
                                    <u><h5>{book["Title"]}</h5> </u>
                                </Link>
                                <p>{book["Publisher"] ? book["Publisher"] : "Desconhecido"}</p>
                                <Link to={`/browse?search=${book["Author"]}&type=author`} className="text-info">
                                    <p><i>{book["Author"]}</i></p>
                                </Link>
                                <Row className="p-0 m-0">
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Idioma: </span>{book["Language"]}
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Ano: </span>{book["Year"]}
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Download: </span><a href={book["MD5"]} target="blank"><RedirectButton /></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </Container>
    )

}