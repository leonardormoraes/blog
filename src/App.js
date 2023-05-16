import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import Feature from './Components/Features/Feature';
import Loading from './Components/Helper/Loading';
import Post from './Components/Pages/Post';
import { UserStorage } from './UserContext';
import Team from './Components/Pages/Team';
import Contact from './Components/Pages/Contact';

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
            <UserStorage>
                {loading && <Loading />}
                <Header />
                    <main className="container">
                        <Routes>
                            <Route path='/' element={<Feature />} />
                        </Routes>
                        <div className="content-1280 d-grid">
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/equipe' element={<Team />} />
                                <Route path='/contato' element={<Contact />} />
                                <Route path='posts/:id' element={<Post />} />
                                <Route path='*' element={<NotFound />} />
                            </Routes>

                            <section>
                                <Search />
                            </section>
                        </div>
                    </main>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    );
}

export default App;