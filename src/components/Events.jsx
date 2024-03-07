import { useEffect, useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { getallEvents } from "../services/api";
import { Event } from "./Event";
import { useDispatch, useSelector } from "react-redux";
import { populateEvents } from "../redux/slices/eventSlice";

export const Events = () => {
    const dispatch = useDispatch();

    const [showWelcome, setShowWelcome] = useState(true);
    const [showBook, setShowBook] = useState(false);
    // const [events, setEvents] = useState([]);
    const events = useSelector((state) => state.events.list);

    useEffect(() => {
        setTimeout(() => setShowWelcome(false), 5000);

        // const getEvents = async () => {
        //     const result = await getallEvents();
        //     console.log(result.data);

        //     dispatch(populateEvents(result.data));
        // };
        // getEvents();

        return () => {
            clearTimeout();
        };
    }, []);

    const showBookAlert = () => {
        setShowBook(true);

        setTimeout(() => setShowBook(false), 2000);
    };

    return (
        <>
            {showWelcome && (
                <Alert variant="primary"> Welcome to Esprit Events </Alert>
            )}
            {showBook && (
                <Alert variant="success"> You've booked an event </Alert>
            )}
            <Container>
                <Row xs={12} md={8}>
                    {events.map((event) => (
                        <Event
                            event={event}
                            key={event.id}
                            book={() => showBookAlert()}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
};
