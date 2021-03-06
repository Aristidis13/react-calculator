import styles from './button.module.css';
import {pressBtn} from '../redux/actions.js';
import {useDispatch} from 'react-redux';

const Button = (props) => {
    const dispatch = useDispatch();
    return(
        <button type="button"
                onClick={(e) => dispatch(pressBtn(e))}
                className={styles.button}
                data-action-type={props.buttonType}
                data-value={props.text}
        >
            {props.text}
        </button>
    )
}

export default Button;