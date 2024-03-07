import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getallEvents } from "../services/api";
import { useEffect, useState } from "react";

export const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({});

    const fetchEvent = async (eventId) => {
        const eventResult = await getallEvents(eventId);
        console.log(eventResult);
        setEvent(eventResult.data);
    };

    useEffect(() => {
        console.log(id);

        fetchEvent(id);
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                <Col md={4}>
                    <Card.Img
                        variant="top"
                        src={`/images/${event.img}`}
                        alt="Product Img"
                        height="300"
                    />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={12}>
                            <h1>{event.name}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h5>Description</h5>
                        </Col>
                        <Col>
                            <p style={{ marginLeft: "50px" }}>
                                {event.description}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h5>Price</h5>
                        </Col>
                        <Col>
                            <p style={{ marginLeft: "50px" }}>
                                {event.price} DT
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
