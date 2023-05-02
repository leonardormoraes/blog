import React from 'react'
import Input from './Form/Input';
import { ReactComponent as IcoLupa } from '../Assets/images/ico/ico-lupa.svg';
import Button from './Form/Button';
import styles from './Search.module.css'

const Search = () => {
    const [search, setSearch] = React.useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className={`${styles.containerSearch} pos-sticky`}>
            <form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <Input type="text" name="search" id="search" value={search} onChange={(({target}) => setSearch(target.value))} className={`${styles.search} bkg-gray color-white`} placeholder="Pesquise por assunto, data..." aria-label="Busca" autoComplete="off" />
                    <Button className={`bkg-blue ${styles.btn}`}><IcoLupa /></Button>
                </div>
            </form>
            <div className={`${styles.posts} bkg-light-gray mt-24`}>
                <h3 className='uppercase'>Últimas Postagens</h3>

                <ul>
                    <li>
                        <a href="/" className='d-flex align-center'>
                            <div></div>
                            <div>
                                <h4>Veja o horóscopo do dia!</h4>
                                <p><strong className={styles.date}>Jul, 25, 2023</strong></p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='d-flex align-center'>
                            <div></div>
                            <div>
                                <h4>Veja o horóscopo do dia!</h4>
                                <p><strong className={styles.date}>Jul, 25, 2023</strong></p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='d-flex align-center'>
                            <div></div>
                            <div>
                                <h4>Veja o horóscopo do dia!</h4>
                                <p><strong className={styles.date}>Jul, 25, 2023</strong></p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/" className='d-flex align-center'>
                            <div></div>
                            <div>
                                <h4>Veja o horóscopo do dia!</h4>
                                <p><strong className={styles.date}>Jul, 25, 2023</strong></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Search