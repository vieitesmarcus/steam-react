import styles from './Footer.module.scss';
import logo from '/assets/header/bi_steam.svg';
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="" />
        </footer>
        )
}