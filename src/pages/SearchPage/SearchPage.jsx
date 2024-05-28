import Container from "react-bootstrap/esm/Container";
import Space from "../../components/Space";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import SearchIcon from "../../components/icons/SearchIcon";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import fetch from "../../fetch";
import { useState, useEffect } from "react";
import BookDisplay from "../../components/BookDisplay/BookDisplay";
import Spinner from "react-bootstrap/Spinner"
import { useSearchParams, Link } from "react-router-dom"
import Pagination from "react-bootstrap/Pagination"

export default function SearchPage() {
    const { SearchInput } = fetch

    const validateType = (type) => {
        if (type === "author" || type === "title" || type === "isbn") return true
        return false
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const type = validateType(searchParams.get("type")) ? searchParams.get("type") : "title"
    const search = searchParams.get("search") ? searchParams.get("search") : ""

    const [textInput, setTextInput] = useState(search)
    const [coreType, setCoreType] = useState(type)
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})
    const [error, setError] = useState("")
    const [pages, setPages] = useState("")
    const [activePage, setActivePage] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (textInput.length > 0) {
            setSearchParams({
                search: textInput,
                type: coreType
            })
        }

    }

    const loadData = async (page) => {
        setLoading(true)
        const response = await SearchInput(type, search, page)
        setResponse(response)
        setLoading(false)
    }

    useEffect(() => {
        if (searchParams.get("search") !== null && searchParams.get("type") !== null) {
            if (activePage != 0) setActivePage(0)
            else loadData(activePage)
        }
        else if (searchParams.get("search") == null && searchParams.get("type") == null) {
            setResponse({})
            setBooks({})
        }
        setTextInput(search)
        setCoreType(type)
    }, [searchParams])


    useEffect(() => {
        if (response["book"] !== undefined) {
            setBooks(response["book"])
            if (response["pages"] > 5) setPages(5)
            else setPages(response["pages"])
        }
        if (response["error"] !== undefined) setError(response["message"])
    }, [response])

    const changeInput = event => {
        setTextInput(event.target.value)
    }

    const coreChange = event => {
        setCoreType(event.target.id)
    }

    const ChangePage = (n) => {
        setActivePage(n)
    }
    useEffect(() => {
        if (searchParams.get("search") != null && searchParams.get("type") != null) {
            loadData(activePage)
        }
    }, [activePage])
    return (
        <Container fluid className="py-5">
            <Form onSubmit={handleSubmit}>
                <Container fluid className="mb-3 radio-search">
                    <Form.Check type="radio" label="ISBN" inline name="core_type" id="isbn" onChange={coreChange} checked={coreType === 'isbn'} />
                    <Form.Check type="radio" label="Autor" inline name="core_type" id="author" onChange={coreChange} checked={coreType === 'author'} />
                    <Form.Check type="radio" label="Título" inline name="core_type" id="title" checked={coreType === 'title'} onChange={coreChange} />
                </Container>
                <Row>
                    <Col md={11} sm={10} xs={9}>
                        <Form.Control type="text" placeholder="Digite aqui" value={textInput} onChange={changeInput} />
                    </Col>
                    <Col md={1} sm={2} xs={2}>
                        <Button type="submit">
                            <SearchIcon books={books} />
                        </Button>
                    </Col>

                </Row>
            </Form>
            {loading ? (
                <Container className="mt-5 text-center">
                    <Spinner animation="border" role="status" />
                    <Space />
                </Container>
            ) : (
                (response["book"] !== undefined) ? (
                    (books.length > 0 ? (
                        <>
                            <BookDisplay books={books} />
                            <Container fluid className="p-5">
                                <Pagination size={"sm"}>
                                    {Array.from({ length: pages }, (_, n) => n).map(n => (
                                        <Pagination.Item key={n} onClick={() => ChangePage(n)} active={activePage === n}>{n + 1}</Pagination.Item>
                                    ))}
                                </Pagination>
                            </Container>
                        </>) : (
                        <div className="mt-5 text-center">
                            <h2>Nenhum resultado Encontrado</h2>
                            <Space />
                        </div>))) : (
                    (error !== "" ? (
                        <div className="mt-5 text-center">
                            <h2 className="text-danger">{error}</h2>
                            <Space />
                        </div>
                    ) : (
                        <>
                            <Space />
                        </>
                    ))

                )
            )}
        </Container>
    )
}