import styles from './Categorias.module.scss';

export default function Categorias(){
    return (
        <div className={styles.categorias}>
            <ul>
                <li><a href="#" className={styles.actived}>Novidades e tendências</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Loja de Pontos</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Laboratório</a></li>
            </ul>
        </div>
    );
}