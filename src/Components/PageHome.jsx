import React from 'react'
import Head from './Head'
import Bkg from '../Assets/images/bkg/bkg-horoscopo.png'

const Home = () => {
    return (
        <section id='headline'>
            <Head title='Home | Seu site de notícias' />

            <ul>
                <li>
                    <a href="/">
                        <img src={Bkg} alt="" />
                        <div className="absolute">
                            <h1>Veja o horóscopo do dia!</h1>
                            <p>Confira o que os astros tem a dizer para o seu signo hoje.</p>
                        </div>
                    </a>
                    <a href="/horoscopo" className='category uppercase' aria-label='Matérias sobre Horóscopo'>Horóscopo</a>
                </li>
            </ul>
        </section>
    )
}

export default Home