import styles from './Search.module.scss';
import searchIcon from '/assets/search.svg';

export default function Search(){
    return(
        <div className={styles.search}>
            <input type="text" placeholder='Buscar' />
            <img  src={searchIcon} alt="" />
        </div>
    )
}