import SongsList from "./components/SongsList/SongsList";
import Container from "react-bootstrap/Container";


function App() {
    return (
        <div className="App">
            <main>
                <Container className='py-3'>
                    <SongsList/>
                </Container>
            </main>
        </div>
    );
}

export default App;