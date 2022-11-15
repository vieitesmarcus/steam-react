import styles from './Vitrine.module.scss';

import farcry from '/assets/farcry.png';
import farcryTitle from '/assets/farcrytitle.png';
import forza from '/assets/forza.png';
import forzaTitle from '/assets/forzatitle.png';
import fifa from '/assets/fifa.png';
import fifaTitle from '/assets/fifatitle.png';
import minecraft from '/assets/minecraft.png';
import minecraftTitle from '/assets/minecrafttitle.png';

export default function Vitrine(){
    return(
        <div className={styles.vitrine}>
            <div className={styles.itens}>
                <img src={farcry} className={styles.background} alt="" />
                <img src={farcryTitle} className={styles.title} alt="" />
            </div>
            <div className={styles.itens}>
                <img src={forza} className={styles.background} alt="" />
                <img src={forzaTitle} className={styles.title} alt="" />
            </div>
            <div className={styles.itens}>
                <img src={fifa} className={styles.background} alt="" />
                <img src={fifaTitle} className={styles.title} alt="" />
            </div>
            <div className={styles.itens}>
                <img src={minecraft} className={styles.background} alt="" />
                <img src={minecraftTitle} className={styles.title} alt="" />
            </div>
        </div>
    );
}