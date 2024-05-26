import { useSearchParams, Link } from "react-router-dom"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import fetch from "../../fetch"
import Space from "../../components/Space"
import { useState, useEffect, useContext } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import RedirectButton from "../../components/RedirectButton/RedirectButton"
import { ThemeContext } from "../../context/ThemeContext"

export default function SinglePage() {
    const { darkTheme } = useContext(ThemeContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const { SearchBook } = fetch
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [book, setBook] = useState({})
    const [image, setImage] = useState("")
    const {FetchImage} = fetch

    const ValidateId = (id) => (
        (+id >= 1 && +id < 999999999999 && !(isNaN(id)))
    )
    const id = ValidateId(searchParams.get("id")) ? searchParams.get("id") : "invalid"

    useEffect(() => {
        const FetchBook = async () => {
            setLoading(true)
            const res = await SearchBook(id)
            setResponse(res)
            setLoading(false)
        }
        FetchBook()
    }, [])

    useEffect(() => {
        console.log(response)
        if (response["error"] !== undefined) setError(response["message"])
        if (response["book"] !== undefined) {
            setBook(response["book"])
        }
    }, [response])

    useEffect(()=>{
        if(book["Year"] !== undefined){
            const GetImage = async () => {
                const imgBlob = await FetchImage(book["Coverurl"]);
                const url = URL.createObjectURL(imgBlob);
                setImage(url)
            }   
            GetImage()
        }
    },[book])

    if (id === "invalid") return (
        <Container fluid>
            <h1>Id inválido</h1>
            <Space />
        </Container>
    )


    return (
        <Container fluid>
            {loading ? (
                <Container className="mt-5 text-center">
                    <Spinner animation="border" role="status" />
                    <Space />
                </Container>
            ) : (
                (error != "" ? (
                    <Container fluid className="text-center">
                        <h3 className="text-danger"> {error} </h3>
                        <Space />
                    </Container>

                ) : (
                    <Container fluid className="mt-5 p-5 front">
                        <Row>
                            <Col md={4} className="text-center mb-4">
                                <img
                                    //src={`https://4064-189-121-203-44.ngrok-free.app/proxy?url=${book["Coverurl"]}`}
                                    src={image}
                                    width={"100%"}
                                    style={{ minWidth: "100px", maxWidth: "300px" }}
                                    alt={`Cover of ${book["Title"]}`}
                                />
                            </Col>
                            <Col md={8}>
                                <h5>{book["Title"]}</h5>
                                <p>{book["Publisher"] ? book["Publisher"] : "Desconhecido"}</p>
                                <Link to={`/browse?search=${book["Author"]}&type=author`} className="text-info">
                                    <p><i>{book["Author"]}</i></p>
                                </Link>
                                <Row className="p-0 m-0 mb-4">
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Idioma: </span>{book["Language"]}
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Ano: </span>{book["Year"]}
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Edição: </span> {book["Edition"] ? book["Edition"] : "1"}
                                    </Col>
                                </Row>
                                <Row className="p-0 m-0 mb-4">
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Páginas: </span>{book["Pages"]}
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">Download: </span><a href={book["MD5"]} target="blank"><RedirectButton /></a>
                                    </Col>
                                    <Col sm={4} md={4} className="text-start p-0">
                                        <span className="textW">ISBN: </span>{book["Identifier"]}
                                    </Col>
                                </Row>
                                    <span className="textW">Tópico: </span>  {book["Topic"]}
                                <Row className="mt-3">
                                    <b>Descrição:</b> <span>{book["descr"] ? book["descr"] : "Nenhuma descrição encontrada"} </span>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                ))
            )}

        </Container >
    )
}

