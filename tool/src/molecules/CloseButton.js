import styles from './CloseButton.module.scss'

const CloseButton = ({clickCallback}) => {
    return (
        <button 
            className={styles.close} 
            onClick={clickCallback}
            ></button>);
}

export default CloseButton;