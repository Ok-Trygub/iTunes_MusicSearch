import React, {useEffect, useState} from 'react';
import './SongsList/SongsList.css';
import Accordion from "react-bootstrap/Accordion";
import {useGetSongsQuery} from "../store/slices/iTunesApi";
import SongsSearchField from "./SongsSearchField/SongsSearchField";
import Tip from "./tip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const SongsList = () => {

    const [searchResult, setSearchResult] = useState();
    const [searchArtistName, setSearchArtistName] = useState();
    const [currentArtistName, setCurrentArtistName] = useState();
    const [skip, setSkip] = useState(true);
    const {data, isLoading} = useGetSongsQuery(currentArtistName, {skip});


    if (searchResult) console.log(searchResult[1])
    // if(searchResult) searchResult.map(item => console.log(item.trackViewUrl))

    useEffect(() => {
        if (!data) return;

        const getDataList = () => {
            const dataList = Object.entries(data)[1];
            setSearchResult(dataList[1])
        }
        getDataList();

    }, [data]);


    const InputHandler = ({target}) => {
        setSearchArtistName(target.value);
    }


    const SearchHandler = (event) => {
        event.preventDefault();

        if (!searchArtistName) return;
        setCurrentArtistName(searchArtistName);
        setSearchArtistName('');

        setSkip(false);

    }


    if (isLoading) return <h1>Loading...</h1>


    return (
        <>
            <SongsSearchField
                searchHandler={SearchHandler}
                inputHandler={InputHandler}
            />

<Row>
    <Col lg={8} className='mx-auto'>
        <Accordion>
            {searchResult ? searchResult.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index}>

                        <Accordion.Header>
                            <Row className='w-100'>
                                <Col>
                                    <img src={item.artworkUrl60} alt=""/>
                                </Col>
                                <Col>
                                    {currentArtistName}
                                </Col>
                                <Col>{item.collectionName}</Col>
                                <Col>{item.primaryGenreName}</Col>
                            </Row>
                        </Accordion.Header>


                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        </Accordion.Body>
                    </Accordion.Item>
                ))
                :
                <Tip/>
            }
        </Accordion>
    </Col>
</Row>

        </>
    );
};

export default SongsList;