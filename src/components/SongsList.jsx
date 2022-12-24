import React, {useState} from 'react';
import Accordion from "react-bootstrap/Accordion";
import {useGetSongsQuery} from "../store/slices/iTunesApi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SongsSearchField from "./SongsSearchField";

const SongsList = () => {

    const [searchResult, setSearchResult] = useState();

    const [artistName, setArtistName] = useState();
    const [skip, setSkip] = useState(true);
    const {data, isLoading} = useGetSongsQuery(artistName, {skip});


    console.log(searchResult)


    const InputHandler = ({target}) => {
        setArtistName(target.value);
    }


    const SearchHandler = (event) => {
        event.preventDefault();

        setSkip(false);


        const getDataList = async () => {
            const dataList = Object.entries(await data)[1];
            console.log(dataList)
            setSearchResult(dataList[1])
        }


        getDataList();
    }


    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <Row>
                <Col xs={4} className='mx-auto'>
                    <SongsSearchField
                        searchHandler={SearchHandler}
                        inputHandler={InputHandler}

                    />
                </Col>
            </Row>


            <Row>
                <Col>

                    <Accordion>

                        {searchResult ? searchResult.map((item, index) => (

                                <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>Accordion Item {index}</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                            :
                            null
                        }


                    </Accordion>
                </Col>
            </Row>


        </div>
    );
};

export default SongsList;