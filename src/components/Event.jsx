import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteEventReducer } from "../redux/slices/eventSlice";
import { useDispatch } from "react-redux";

export const Event = (props) => {
    const dispatch = useDispatch();
    const [event, setEvent] = useState(props.event);
    const handleBook = () => {
        setEvent({
            ...event,
            nbParticipants: event.nbParticipants + 1,
            nbTickets: event.nbTickets - 1,
        });
        props.book();
    };
    return (
        <>
            <Card style={{ width: "20rem" }} className="m-3">
                <Card.Img variant="top" src={`/images/${event.img}`} />
                <Card.Body>
                    <Card.Title>{event.id}</Card.Title>
                    <Card.Title>
                        <Link to={`${event.id}`}>{event.name}</Link>
                    </Card.Title>
                    <Card.Text>
                        {event.description} <br />
                        <b>Price : </b> {event.price} <br />
                        <b>Tickets : </b> {event.nbTickets} <br />
                        <b>Participants : </b> {event.nbParticipants} <br />
                    </Card.Text>
                    <Button variant="outline-dark" onClick={handleBook}>
                        Book
                    </Button>
                    <Button
                        variant="danger"
                        className="mx-5"
                        onClick={() => dispatch(deleteEventReducer(event.id))}
                    >
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};
