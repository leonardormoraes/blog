import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/PageHome';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Feature from './Components/Features/Feature';
import Loading from './Components/Helper/Loading';

function App() {
    return (
        <BrowserRouter>
            <Header />
                <main className="container">
                    {/* <Feature /> */}
                    <div className="content-1280 d-grid">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>

                        <Search />
                    </div>
                </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;