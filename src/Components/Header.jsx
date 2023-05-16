import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Assets/images/ico/ico-logo.svg'
import styles from './Header.module.css'
import { ReactComponent as IcoMenu } from '../Assets/images/ico/ico-menu.svg';
import { ReactComponent as IcoClose } from '../Assets/images/ico/ico-close.svg';

const Header = () => {
    const [menu, setMenu] = React.useState(false);
    const navmenu = React.useRef(null);

    React.useEffect(() => {

        if(menu) {
            navmenu.current.setAttribute('data-active', '');
            
        } else {
            navmenu.current.removeAttribute('data-active', '');

        }

    }, [menu]);

    return (
        <header className='pos-sticky bkg-gray'>
            <div className="content-1280 d-flex justify-between">
                <a href="./" className='logo color-white'><img src={Logo} width={28} alt="Seu blog de notícias e curiosidades" /></a>

                <nav id={`${styles.menu}`} ref={navmenu}>
                    <NavLink to='./' className='uppercase'>Home</NavLink>
                    <NavLink to='/noticias' className='uppercase'>Notícias</NavLink>
                    <NavLink to='/categorias' className='uppercase'>Categorias</NavLink>
                    <NavLink to='/listas' className='uppercase'>Listas</NavLink>
                    <NavLink to='/equipe' className='uppercase'>Equipe</NavLink>
                    <NavLink to='/contato' className='uppercase'>Contato</NavLink>
                </nav>
                <button type='button' className={`${styles.openMenu} btn`} onClick={() => setMenu(!menu)}>
                    {!menu ? <IcoMenu /> : <IcoClose />}
                </button>
            </div>
        </header>
    )
}

export default Header