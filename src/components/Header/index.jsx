import styles from './Header.module.scss';
import bell from '/assets/header/bell.svg';
import message from '/assets/header/message-circle.svg';
import perfil from '/assets/header/Group1.svg';
import chevron from '/assets/header/chevron-right.svg';
import plus from '/assets/header/plus.svg';
import copy from '/assets/header/copy.svg';
import x from '/assets/header/x.svg';
import steam from '/assets/header/bi_steam.svg';
import mHamburguer from '/assets/header/menuHamburguer.svg';


export default function Header() {

  return (
      <div className={styles.header}>
        <ul className={styles.logo}>
          <li><img src={steam} alt="steam logo" /></li>
        </ul>
        <ul className={styles.menuHamburguer} id="menuH">
          <li><a href="#"><img src={mHamburguer} alt="" /></a></li>
        </ul>
        <div className={styles.headerMenu}>
          <ul className={styles.headerLeft}>
            <li><a href="#" className={styles.actived}>LOJA</a></li>
            <li><a href="#">BIBLIOTECA</a></li>
            <li><a href="#">COMUNIDADE</a></li>
            <li><a href="#">AJUDA</a></li>
          </ul>

          <ul className={styles.headerRight}>
            <li className={styles.icons}>
              <li><a href="#"><img src={bell} alt="" /></a></li>
              <li><a href="#"><img src={message} alt="" /></a></li>
            </li>
            <li className={styles.icons}>
              <li><a href="#"><img src={perfil} alt="" /></a></li>
              <li><a href="#"><img src={chevron} alt="" /></a></li>
            </li>
            <li className={styles.icons}>
              <li><a href="#"><img src={plus} alt="" /></a></li>
              <li><a href="#"><img src={copy} alt="" /></a></li>
              <li><a href="#"><img src={x} alt="" /></a></li>
            </li>
          </ul>
        </div>
      </div>
  )
}