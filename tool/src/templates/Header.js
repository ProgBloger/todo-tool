import bgImage from '../assets/Mountain.jpg';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles['main-image']}>
            <img src={bgImage} alt="Magenta Background Car" />
        </div>
    )
}

export default Header;