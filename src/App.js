import React from "react";

import { Cards, Chart, CountryPicker } from "./components/";
import { Container, Row, Col } from "react-bootstrap";
// import styles from "./App.module.css";
import { fetchData } from "./api"

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {
        const { data, country } = this.state;

        return (
            // <div className={styles.container}>
            <div>
                <Container>
                    <Row>
                        <Col className="text-center p-4">
                            <h1>COVID-19 TRACKER</h1>
                            <h5>Global</h5>
                        </Col>
                    </Row>
                </Container>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;