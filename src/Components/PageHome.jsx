import React from 'react'
import Head from './Head'
import { API_URL } from '../api'
import styles from './PageHome.module.css'

const Home = () => {
    const host = API_URL;
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {

        (async function getPost() {
            const response = await fetch(`${API_URL}/JSON/Posts.json`);
            const json = await response.json();
            setPosts(json);
        })();

    }, []);

    if (posts === null) return null;
    return (
        <section id='headline'>
            <Head title='Home | Seu site de notícias' />

            <ul>
                {posts.map((post) => (
                    <li key={post.id} className='pos-relative mb-24'>
                        <a href={`${host}/posts/${post.permalink}`} className={`${styles.item} pos-relative`}>
                            <img src={`/images/cap/${post.img}`} alt={post.title} className='pos-absolute' />
                            <div className={`${styles.desc} color-white`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                            </div>
                        </a>
                        <a href={`${host}/${post.cat.link}`} className={`${styles.category} btn category pos-absolute uppercase`} aria-label={`Matérias sobre ${post.cat.type}`}>{post.cat.type}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home