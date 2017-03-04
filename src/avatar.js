import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="http://i.imgur.com/BN8e29I.jpg" thumbnail />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;