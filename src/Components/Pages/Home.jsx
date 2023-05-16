import React from 'react'
import Head from '../Head'
import { API_URL, GET_POSTS } from '../../api'
import styles from './Home.module.css'

const Home = () => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {

        (async function getPost() {
            try {
                const { url, options } = GET_POSTS();
                const response = await fetch(url, options);
                const json = await response.json();
                console.log(json);
                setPosts(json);
            } catch(err) {
                console.log('err');
            }
        })();

    }, []);

    if (posts === null) return null;
    return (
        <section id='headline'>
            <Head title='Home | Seu site de notícias' />

            <ul>
                {posts.map((post) => (
                    <li key={post.id} className='pos-relative mb-24'>
                        <a href={`/posts/${post.permalink}`} className={`${styles.item} pos-relative`}>
                            <img src={`/images/cap/${post.img}`} alt={post.title} className='pos-absolute' />
                            <div className={`${styles.desc} color-white`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                            </div>
                        </a>
                        <a href={`/${post.cat}`} className={`${styles.category} btn category pos-absolute uppercase`} aria-label={`Matérias sobre ${post.type}`}>{post.type}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home