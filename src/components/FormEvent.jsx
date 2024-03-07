import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";

export const FormEvent = () => {
    const f = useFormik({
        initialValues: {
            name: "",
            description: "",
            img: "",
            price: 0,
            nbTickets: 0,
            nbParticipants: 0,
        },
        onSubmit: (values) => {
            console.log("Submitted");
            console.log(values);
        },
    });
    return (
        <>
            <Container className="mt-3">
                <Form
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={f.onSubmit}
                >
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            onChange={f.handleChange}
                            value={f.values.name}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Description"
                            name="description"
                            onChange={f.handleChange}
                            value={f.values.description}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={f.handleChange}
                            value={String(f.values.price)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNbParticipants">
                        <Form.Label>NbParticipants</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="NbParticipants"
                            name="nbParticipants"
                            onChange={f.handleChange}
                            value={f.values.nbParticipants}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNbTickets">
                        <Form.Label>NbTickets</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="NbTickets"
                            name="nbTickets"
                            onChange={f.handleChange}
                            value={f.values.nbTickets}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Image"
                            name="img"
                            onChange={f.onChangeFileInput}
                            value={f.values.img}
                        />
                    </Form.Group>

                    <Button
                        variant="outline-dark"
                        type="submit"
                        className="mx-5"
                    >
                        Submit
                    </Button>
                    <Button variant="outline-dark" type="reset">
                        Cancel
                    </Button>
                </Form>
            </Container>
        </>
    );
};
