import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
 return (
    <Container className="text-center" style={{ marginTop: '10%' }}>
      <Row>
        <Col>
          <h1 style={{fontSize:'30vh', color:'grey'}}>404</h1>
          <h2>Sorry, we couldn't find this page.</h2>
          <p>But don't worry, you can find plenty of other things on our homepage.</p>
          <Link to="/">
            <Button variant="primary"><FontAwesomeIcon icon={faHome}/> Back Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
 );
};

export default NotFound;