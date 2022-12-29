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
                <Col lg={8} className='mx-auto'>
                    <Accordion>
                        {searchResult ? (
                                <>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <span>Artist</span>
                                        </Col>
                                        <Col>
                                            <span>Track</span>
                                        </Col>
                                        <Col>
                                            <span>Collection</span>
                                        </Col>
                                        <Col xs={3}>
                                            <span>Genre</span>
                                        </Col>
                                    </Row>


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