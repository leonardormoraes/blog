import React from 'react'
import styles from './Loading.module.css'
import { ReactComponent as IcoLoader } from '../../Assets/images/ico/ico-loader.svg';

const Loading = () => {
    const [loading, setLoading] = React.useState(true);

    if(!loading) return null;

    return (
        <div className={`${styles.containerLoader} fadeIn d-flex align-center justify-center`}>
            <IcoLoader className={styles.loader} />
        </div>
    )
}

export default Loading