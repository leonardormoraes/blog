import React from 'react'
import styles from './Post.module.css'

const Post = () => {

    return (
        <div>
            <div className="breadcrumb mb-24">
                <a href="./">Home</a>
            </div>
            <div className="post-category mb-24">
                <p className='mb-10'>Veja mais sobre em:</p>
                <a href="/categoria" className={`${styles.category} category btn bkg-blue color-white`}>Categoria</a>
            </div>
            <h1 className='mb-24'>Título do Post</h1>
            <p>Aqui virá o conteúdo post, sendo textos, imagens e afins, tudo o que possa construir um artigo, porém ainda preciso saber como armazenar isso da maneira correta no banco, pra não gerar carga desnecessária.</p>
        </div>
    )
}

export default Post