import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tip = () => {
    return (
        <Row>
            <Col xs={10} sm={8} lg={6} className='mx-auto my-t'>
                <p>To search for audio content, input in the search field the name of the artist whose track list
                    you would like to receive.

                    <span className='d-block my-2'>
                        For example: "<b><em>The Beatles</em></b>".
                    </span>

                    Then click the search button.</p>
            </Col>
        </Row>
    );
};

export default Tip;