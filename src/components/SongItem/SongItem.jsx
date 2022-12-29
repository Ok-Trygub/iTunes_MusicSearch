import React from 'react';
import './SongItem.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";


const SongItem = (props) => {

    const {index, currentArtistName, imgSource, trackName, collectionName, genreName} = props;


    return (
        <Accordion.Item eventKey={index}>
            <div style={{
                backgroundColor:
                    props.index % 2 === 0
                        ? 'inherit' : '#b8cce4'
            }}>

                <Accordion.Header>
                    <Row className='w-100'>
                        <Col>
                            <img src={imgSource} alt="song_img"/>
                        </Col>
                        <Col>
                            {currentArtistName}
                        </Col>
                        <Col>
                            {trackName}
                        </Col>
                        <Col>{collectionName}</Col>
                        <Col>{genreName}</Col>
                    </Row>
                </Accordion.Header>


                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </Accordion.Body>
            </div>


        </Accordion.Item>


    );
};

export default SongItem;