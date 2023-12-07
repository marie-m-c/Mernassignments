import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddBox = ({ addProperties }) => {
    const [col, setCol] = useState("");
    const [dim, setDim] = useState("100")

    const handleSubmit = (e) => {
        e.preventDefault();
        let d = dim + "px";
        addProperties(col, d);
        setCol("");
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="d-flex align-items-center my-2" controlId="exampleForm.ControlInput1">
                <Form.Label className="w-25">Color</Form.Label>
                <Form.Control className="w-75" type="text" value={col} onChange={(e) => setCol(e.target.value)} />
            </Form.Group>
            <Form.Group className="d-flex align-items-center my-2" controlId="exampleForm.ControlInput1">
                <Form.Label className="w-25">Dimension</Form.Label>
                <Form.Control className="w-75" type="number" value={dim} onChange={(e) => setDim(e.target.value)} />
            </Form.Group>
            <Form.Control className="w-50 mx-auto" type="submit" value="Add" />
            
        </Form>
    );
}

export default AddBox;