import React from 'react';
import './SongsSearchField.css';
import Search from "../../assets/icons/Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SongsSearchField = (props) => {

    return (
        <Row>
            <Col xs={10} sm={8} md={6} lg={4} className='mx-auto mb-4'>
                <form className='d-flex'>
                    <input type="text" className='w-100 searchInput' placeholder='Imagine Dragons'
                           onChange={props.inputHandler}/>
                    <button className='searchBtn' onClick={props.searchHandler}>
                        <Search/>
                    </button>
                </form>
            </Col>
        </Row>
    );
};

export default SongsSearchField;