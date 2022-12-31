import TrackList from "./components/TrackList/TrackList";
import Container from "react-bootstrap/Container";


function App() {
    return (
        <div className="App">
            <main>
                <Container className='py-3'>
                    <TrackList/>
                </Container>
            </main>
        </div>
    );
}

export default App;