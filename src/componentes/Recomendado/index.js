import styles from './Recomendado.module.css';

import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";
import { useParams } from 'react-router-dom';

export default function Recomendado() {

    const parametros = useParams()

    const postsMenosOAtual = posts
    .filter(post => post.id !== Number(parametros.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

    const postsSelecionados = postsMenosOAtual

    return (

        <>

            <h2 className={styles.titulo}> Outros posts que você pode gostar:</h2>


            <ul className={styles.posts}>
                {postsSelecionados.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>

        </>
    )
}