import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';

import { fetchCountries } from "../../api";

const Countries = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <Container>
            <Row className="p-5">
                <Col>
                    <Form.Select defaultValue="" aria-label="Default select example" onChange={(e) => handleCountryChange(e.target.value)}>
                        <option value="">Global</option>
                        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                    </Form.Select>
                </Col>
            </Row>

        </Container>
    )
}

export default Countries;