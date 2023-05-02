import React from 'react'
import Head from './Head'
import Bkg from '../Assets/images/bkg/bkg-horoscopo.png'
import Bkg1 from '../Assets/images/bkg/bkg-computador.png'
import styles from './PageHome.module.css'

const Home = () => {

    return (
        <section id='headline'>
            <Head title='Home | Seu site de notícias' />

            <ul>
                <li className='pos-relative mb-24'>
                    <a href="/" className={`${styles.item} pos-relative`}>
                        <img src={Bkg} alt="" className='pos-absolute' />
                        <div className={`${styles.desc} color-white`}>
                            <h1>Veja o horóscopo do dia!</h1>
                            <p>Confira o que os astros tem a dizer para o seu signo hoje.</p>
                        </div>
                    </a>
                    <a href="/horoscopo" className={`${styles.category} btn category pos-absolute uppercase`} aria-label='Matérias sobre Horóscopo'>Horóscopo</a>
                </li>
                <li className='pos-relative mb-24'>
                    <a href="/" className={`${styles.item} pos-relative`}>
                        <img src={Bkg1} alt="" className='pos-absolute' />
                        <div className={`${styles.desc} color-white`}>
                            <h1>Windows: consultar memória RAM</h1>
                            <p>Saiba como consultar a memória RAM disponível no seu computador.</p>
                        </div>
                    </a>
                    <a href="/horoscopo" className={`${styles.category} btn category pos-absolute uppercase`} aria-label='Matérias sobre Horóscopo'>Tecnologia</a>
                </li>
            </ul>
        </section>
    )
}

export default Home