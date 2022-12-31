import React from 'react';
import './SongItem.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Note from "../../assets/icons/Note";


const SongItem = (props) => {

    const {
        index,
        artistName,
        imgSource,
        trackName,
        collectionName,
        genreName,
        trackCount,
        collectionPrice,
        trackPrice,
        trackCensoredName
    } = props;


    return (
        <Accordion.Item eventKey={index}>
            <div style={{
                backgroundColor:
                    props.index % 2 === 0
                        ? 'inherit' : '#b8cce4'
            }}>

                <Accordion.Header>
                    <Row className='w-100 align-items-center'>
                        <Col className='trackImgWrapper'>
                            <img src={imgSource} alt="song_img"/>
                        </Col>
                        <Col>
                            {artistName}
                        </Col>
                        <Col>
                            {trackName}
                        </Col>
                        <Col>{collectionName}</Col>
                        <Col>{genreName}</Col>
                    </Row>
                </Accordion.Header>

                <Accordion.Body>
                    <Row>
                        <Col className='trackImgWrapper'></Col>
                        <Col>
                            <h1 className='pb-3 trackTitle pe-1'>{artistName} - {trackName}
                                <div className='ps-1'><Note/></div>

                            </h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='trackImgWrapper'></Col>
                        <Col>
                            <p><span className='fw-semibold'>Collection:</span> {collectionName}</p>
                            <p><span className='fw-semibold'>Track Count:</span> {trackCount}</p>
                            <p><span className='fw-semibold'>Price:</span> {collectionPrice} USD</p>
                        </Col>

                        <Col>
                            <p><span className='fw-semibold'>Track Censored Name:</span> {trackCensoredName}</p>
                            <p><span className='fw-semibold'>Track price:</span> {trackPrice} USD</p>
                        </Col>
                    </Row>
                </Accordion.Body>
            </div>
        </Accordion.Item>
    );
};

export default SongItem;