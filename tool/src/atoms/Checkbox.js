import { useState } from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({id, setActive, enabled, valueCallback}) => {

    const clickHandler = () => {
        if(enabled) {
            if(valueCallback) {
                valueCallback(!setActive);
            }
        }
    }

    return(
          <div 
            className={`${setActive 
                            ? styles.active 
                            : styles.inactive} ${styles.round}`} 
            onClick={clickHandler}>
            <input type="checkbox" id={id} />
            <label htmlFor="checkbox"></label>
          </div>
        )
}

export default Checkbox;