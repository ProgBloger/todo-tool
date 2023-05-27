import { useState } from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({id}) => {
    const [isActive, setIsActive] = useState(false); 

    const clickHandler = () => {
        setIsActive(prevState => {return !prevState});
    }

    return(
        <div className={styles.container}>
          <div className={isActive ? styles.active : styles.inactive} onClick={clickHandler}>
            <input type="checkbox" id={id} />
            <label htmlFor="checkbox"></label>
          </div>
        </div>
        )
}

export default Checkbox;