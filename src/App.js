import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/PageHome';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Feature from './Components/Features/Feature';
import Loading from './Components/Helper/Loading';
import Post from './Components/Posts/Post';

function App() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('body').style.overflow = 'auto';
    
                setLoading(false);
            }, 1000);
        });

        
    }, [loading]);
    
    return (
        <BrowserRouter>
            {loading && <Loading />}
            <Header />
                <main className="container">
                    <Feature />
                    <div className="content-1280 d-grid">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/posts/*' element={<Post />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>

                        <section>
                            <Search />
                        </section>
                    </div>
                </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;