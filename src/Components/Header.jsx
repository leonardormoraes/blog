import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className='bkg-gray'>
            <div className="content-1280 d-flex justify-between">
                <a href="./" className='logo color-white'>Logo</a>

                <nav id={`${styles.menu}`}>
                    <NavLink to='./' className='uppercase'>Home</NavLink>
                    <NavLink to='/noticias' className='uppercase'>Notícias</NavLink>
                    <NavLink to='/horoscopo' className='uppercase'>Horóscopo</NavLink>
                    <NavLink to='/listas' className='uppercase'>Listas</NavLink>
                    <NavLink to='/equipe' className='uppercase'>Equipe</NavLink>
                    <NavLink to='/contato' className='uppercase'>Contato</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header