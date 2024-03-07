import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addEvent } from "../services/api";
import { useNavigate } from "react-router-dom";

export const EventForm = () => {
    const navigate = useNavigate();

    const [event, setEvent] = useState({
        name: "",
        description: "",
        img: "",
        price: 0,
        nbTickets: 0,
        nbParticipants: 0,
    });

    const handleChange = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileInput = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.files[0].name });
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const eventResult = await addEvent(event);
        if (eventResult.status === 201) {
            navigate("/");
        }
    };

    return (
        <Container className="mt-3">
            <Form method="POST" encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Price"
                        name="price"
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNbParticipants">
                    <Form.Label>NbParticipants</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="NbParticipants"
                        name="nbParticipants"
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNbTickets">
                    <Form.Label>NbTickets</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="NbTickets"
                        name="nbTickets"
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="Image"
                        name="img"
                        onChange={(e) => handleFileInput(e)}
                    />
                </Form.Group>

                <Button
                    variant="outline-dark"
                    type="submit"
                    className="mx-5"
                    onClick={(e) => handleClick(e)}
                >
                    Submit
                </Button>
                <Button variant="outline-dark" type="reset">
                    Cancel
                </Button>
            </Form>
        </Container>
    );
};
