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
import Pagination from "react-bootstrap/Pagination"
import info from "../../info";
import "./FilterPage.css"
import FilterSelect from "../../components/FilterSelect/FilterSelect";

export default function SearchPage() {
    const { SearchInput } = fetch

    const [filter, setFilter] = useState({})
    const ApplyFilter = filter => setFilter(filter)

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})
    const [error, setError] = useState("")
    const [pages, setPages] = useState("")
    const [activePage, setActivePage] = useState(null)

    useEffect(()=>{
        if(filter.year != undefined){
            if(activePage == 0) loadData(activePage)
            if(activePage != 0) setActivePage(0)
        }
        else {
            setResponse({})
            setBooks({})
            setError("")
        }
    },[filter])

    const loadData = async (page) => {
        setLoading(true)
        const search = `${filter.year} ${filter.language} ${filter.topic} ${filter.subTopic}`
        const response = await SearchInput("filters", search, page)
        setResponse(response)
        setLoading(false)
    }

    useEffect(() => {
        if (response["book"] !== undefined) {
            setBooks(response["book"])
            if (response["pages"] > 5) setPages(5)
            else setPages(response["pages"])
        }
        if (response["error"] !== undefined) setError(response["message"])
    }, [response])

    const ChangePage = (n) => {
        setActivePage(n)
    }
    useEffect(() => {
        if (filter.year != undefined) {
            loadData(activePage)
        }
    }, [activePage])
    return (
        <Container fluid className="py-5">
            <FilterSelect Apply={ApplyFilter}/>
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