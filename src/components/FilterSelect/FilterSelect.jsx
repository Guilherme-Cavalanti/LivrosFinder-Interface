import { useState, useEffect, useRef } from "react"
import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import "./FilterSelect.css"
import Form from "react-bootstrap/Form"
import fetch from "../../fetch"
import Spinner from "react-bootstrap/esm/Spinner"
import Button from "react-bootstrap/esm/Button"
import info from "../../info"
import Drop from "../icons/Drop"

export default function FilterSelect(props) {
    const { topicos, linguas, subtopicos } = info

    const [textInput, setTextInput] = useState("")
    const [language, setLanguage] = useState("")
    const [filters, setFilters] = useState({})
    const [topic, setTopic] = useState("")
    const [subTopic, setSubTopic] = useState("")

    const topicDiv = useRef(null)
    const subTopicDiv = useRef(null)

    const changeInput = event => {
        setTextInput(event.target.value)
    }

    const changeLanguage = event => {
        setLanguage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFilters({
            year: textInput,
            language: language,
            topic: topic,
            subTopic: subTopic
        })
    }

    const eraseFilters = () => {
        setLanguage("")
        setTextInput("")
        setTopic("")
        setSubTopic("")
        setFilters({})
    }

    const changeTopic = (newTopic) => {
        setTopic(newTopic)
        setSubTopic("")
        subTopicDiv.current.classList.add("d-none")
        topicDiv.current.classList.toggle('d-none');
    }

    const subTopicDrop = () => {
        if (subTopicDiv.current) {
            if(topic !== "") {
                subTopicDiv.current.classList.toggle("d-none")
            }
        }
    }
    const changeSubTopic = (newTopic) => {
        setSubTopic(newTopic)
        subTopicDiv.current.classList.toggle('d-none');
    }

    const ApplyFilters = () => {
        props.Apply(filters)
    }
    useEffect(() => {
        ApplyFilters()
    }, [filters])

    const topicDrop = () => {
        if (topicDiv.current) {
            topicDiv.current.classList.toggle('d-none');
        }
    };

    return (
        <Container fluid>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col sm={6} xs={12}>
                        <Form.Label htmlFor="numberInput">Ano:</Form.Label>
                        <Form.Control type="number" placeholder="Digite aqui" value={textInput} onChange={changeInput} id={"numberInput"} />
                    </Col>
                    <Col sm={6} xs={12}>
                        <Form.Label htmlFor="languageSelect">Língua:</Form.Label>
                        <Form.Select aria-label="Default select example" id={"languageSelect"} className="select-filtro" value={language} onChange={changeLanguage}>
                            <option value={""}>Selecione a Língua</option>
                            {linguas.map(l => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} xs={12}>
                        <Form.Label htmlFor="topicInput">Tópico:</Form.Label>
                        <Row>
                            <Col xs={11} sm={11} style={{ paddingRight: "0px" }} >
                                <Form.Control type="text" placeholder="Selecione o tópico" value={topic} id={"topicInput"} disabled={true} />
                            </Col>
                            <Col xs={1} sm={1} className="text-start p-0">
                                <Drop func={topicDrop} />
                            </Col>
                        </Row>
                        <Row>
                            <Container fluid className="d-none select-filtro" ref={topicDiv} style={{ paddingRight: "0px" }} >
                                <ul className="filter-list">
                                    <li key="" onClick={()=> changeTopic("")} className="filter-li border">Selecione o tópico</li>
                                    {topicos.map((t) => (
                                        <li key={t["topic_descr"]} onClick={() => changeTopic(t["topic_descr"])} className="filter-li border">{t["topic_descr"]}</li>
                                    ))}
                                </ul>
                            </Container>
                        </Row>
                    </Col>
                    <Col sm={6} xs={12}>
                        <Form.Label htmlFor="subtopicInput">Subtópico:</Form.Label>
                        <Row>
                            <Col xs={11} sm={11} style={{ paddingRight: "0px" }} >
                                <Form.Control type="text" placeholder="Selecione o subtópico" value={subTopic} id={"subtopicInput"} disabled={true} />
                            </Col>
                            <Col xs={1} sm={1} className="text-start p-0">
                                <Drop func={subTopicDrop} />
                            </Col>
                        </Row>
                        <Row>
                            <Container fluid className="d-none select-filtro" ref={subTopicDiv} style={{ paddingRight: "0px" }}>
                                <ul className="filter-list">
                                <li key="" onClick={()=> changeSubTopic("")} className="filter-li border">Selecione o subtópico</li>
                                    {subtopicos[topic].map((s) => (
                                        <li key={s} onClick={() => changeSubTopic(s)} className="filter-li border">{s}</li>
                                    ))}
                                </ul>
                            </Container>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm={6} xs={6} className="text-center">
                        <Button type="submit" variant="success">
                            Aplicar Filtros
                        </Button>
                    </Col>
                    <Col sm={6} xs={6} className="text-center">
                        <Button variant="danger" onClick={eraseFilters}>
                            Apagar Filtros
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}