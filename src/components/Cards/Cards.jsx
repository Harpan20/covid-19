import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        // <div className={styles.containers}>
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Card className={cx(styles.card, styles.infected)}>
                        <Card.Header className={cx(styles.headblue)}>Infected</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                            </Card.Title>
                            <Card.Text>
                                {new Date(lastUpdate).toDateString()}
                            </Card.Text>
                            <Card.Text>
                                numbers of active cases of COVID-19
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4} >
                    <Card className={cx(styles.card, styles.recovered)}>
                        <Card.Header className={cx(styles.headgreen)}>Recovered</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                            </Card.Title>
                            <Card.Text>
                                {new Date(lastUpdate).toDateString()}
                            </Card.Text>
                            <Card.Text>
                                numbers of recoveries cases of COVID-19
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card className={cx(styles.card, styles.deaths)}>
                        <Card.Header className={cx(styles.headred)}>Deaths</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                            </Card.Title>
                            <Card.Text>
                                {new Date(lastUpdate).toDateString()}
                            </Card.Text>
                            <Card.Text>
                                numbers of deaths cases of COVID-19
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
        // </div>
    )
}

export default Info;