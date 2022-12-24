import SongsSearchField from "./components/SongsSearchField";
import SongsList from "./components/SongsList";
import {useGetSongsQuery} from "./store/slices/iTunesApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function App() {



    return (
        <div className="App">
            <main>
                <Container>


                    <Row>
                        <Col>
                            <SongsList/>
                        </Col>
                    </Row>


                </Container>
            </main>
        </div>
    );
}

export default App;