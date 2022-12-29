import React, {useEffect, useState} from 'react';
import './SongsList/SongsList.css';
import Accordion from "react-bootstrap/Accordion";
import {useGetSongsQuery} from "../store/slices/iTunesApi";
import SongsSearchField from "./SongsSearchField/SongsSearchField";
import Tip from "./tip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SongItem from "./SongItem/SongItem";


const SongsList = () => {

    const [searchResult, setSearchResult] = useState();
    const [searchArtistName, setSearchArtistName] = useState();
    const [currentArtistName, setCurrentArtistName] = useState();
    const [skip, setSkip] = useState(true);
    const {data, isLoading} = useGetSongsQuery(currentArtistName, {skip});


    useEffect(() => {
        if (!data) return;

        const getDataList = () => {
            const dataList = Object.entries(data)[1];
            setSearchResult(dataList[1])
        }
        getDataList();

    }, [data]);


    const InputHandler = ({target}) => {
        if (!target.value.trim()) return;
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
                <Col lg={9} className='mx-auto'>
                    <Accordion>
                        {searchResult ? (
                                <>
                                    <Accordion.Item eventKey='one' className='listHeader'>
                                        <Accordion.Header>
                                            <Row className='w-100 align-items-center'>
                                                <Col className='trackImgWrapper'></Col>
                                                <Col>Artist</Col>
                                                <Col>Track</Col>
                                                <Col>Collection</Col>
                                                <Col>Genre</Col>
                                            </Row>
                                        </Accordion.Header>
                                    </Accordion.Item>

                                    {searchResult.map((item, index) => (
                                        <SongItem key={index}
                                                  currentArtistName={currentArtistName}
                                                  index={index}
                                                  imgSource={item.artworkUrl60}
                                                  trackName={item.trackName}
                                                  collectionName={item.collectionName}
                                                  genreName={item.primaryGenreName}
                                        />
                                    ))}
                                </>
                            )
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