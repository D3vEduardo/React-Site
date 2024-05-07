import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Elements/Nav/Nav";
import Footer from "./Components/Elements/Footer/Footer";

import Home from "./Components/Pages/Home";
import Contato from "./Components/Pages/Contato";


function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <main>
                                <Home />
                            </main>
                        }
                    />
                    <Route
                        path="/contato"
                        element={
                            <main>
                                <Contato />
                            </main>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
