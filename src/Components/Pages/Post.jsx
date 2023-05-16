import React from 'react'
import styles from './Post.module.css'
import Breadcrumb from '../Helper/Breadcrumb'
import { useParams } from 'react-router-dom'
import { GET_POST } from '../../api'

const Post = () => {
    const { id } = useParams();
    const [ post, setPost ] = React.useState(null);

    React.useEffect(() => {

        (async function getPost() {
            try {
                const { url, options } = GET_POST(id);
                const response = await fetch(url, options);
                const json = await response.json();
                console.log(json);
                setPost(json);
            } catch(err) {
                console.log('err');
            }
        })();

    }, [ id ]);

    if(post === null) {
        return (
            <div>
                <p>O post não existe ou foi excluído</p>
            </div>
        )
    } else {
        return (
            <div>
                <Breadcrumb />
                <div className="post-category mb-24">
                    <p className='mb-24'>Veja mais sobre em:</p>
                    <a href={`/categoria/${post.cat}`} className={`${styles.category} category btn bkg-blue color-white`}>{post.type}</a>
                </div>
                <h1 className='mb-24'>{post.title}</h1>
                <p>{post.desc}</p>
                <p>{post.content}</p>
            </div>
        )
    }
}

export default Post