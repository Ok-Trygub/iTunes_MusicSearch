import React, {useEffect, useState} from 'react';
import './TrackList.css';
import Accordion from "react-bootstrap/Accordion";
import {useGetSongsQuery} from "../../store/slices/iTunesApi";
import SongsSearchField from "../SongsSearchField/SongsSearchField";
import Tip from "../Tip/tip";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SongItem from "../SongItem/SongItem";
import Loader from '../Loader/Loader';


const TrackList = () => {

    const [searchResult, setSearchResult] = useState();
    const [searchArtistName, setSearchArtistName] = useState();
    const [skip, setSkip] = useState(true);
    const {data, isLoading} = useGetSongsQuery(searchArtistName, {skip});


    useEffect(() => {
        if (!data) return;

        const getDataList = () => {
            const dataList = Object.entries(data)[1];

            if (dataList[1].length === 0) setSearchResult(null);
            else setSearchResult(dataList[1]);
        }
        getDataList();

        setSkip(true);

    }, [data]);


    const InputHandler = ({target}) => {
        if (!target.value.trim()) return;
        setSearchArtistName(target.value);
    }

    const SearchHandler = (event) => {
        event.preventDefault();

        setSkip(false);
    }


    if (isLoading) return <Loader/>

    const RenderResults = () => {
        if (searchResult === undefined) return <Tip/>;
        if (searchResult === null) return (
            <p className='fw-semibold text-center'>Nothing found for the given parameters. Try again with the correct
                artist name.</p>
        )

        return (
            <Row>
                <Col lg={9} className='mx-auto'>
                    <Accordion>
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
                                      artistName={item.artistName}
                                      index={index}
                                      imgSource={item.artworkUrl60}
                                      trackName={item.trackName}
                                      collectionName={item.collectionName}
                                      genreName={item.primaryGenreName}
                                      trackCount={item.trackCount}
                                      collectionPrice={item.collectionPrice}
                                      trackPrice={item.trackPrice}
                                      trackCensoredName={item.trackCensoredName}
                            />
                        ))}
                        }
                    </Accordion>
                </Col>
            </Row>
        )}


    return (
        <>
            <SongsSearchField
                searchHandler={SearchHandler}
                inputHandler={InputHandler}
            />

            {RenderResults()}
        </>
    );
};

export default TrackList;