import { useState } from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({id, setActive, enableStyles, valueCallback}) => {

    const clickHandler = () => {
            if(valueCallback) {
                valueCallback(!setActive);
            }
    }

    return(
          <div 
            className={`${enableStyles && setActive 
                            ? styles.active 
                            : styles.inactive} ${styles.round}`} 
            onClick={clickHandler}>
            <input type="checkbox" id={id} />
            <label htmlFor="checkbox"></label>
          </div>
        )
}

export default Checkbox;