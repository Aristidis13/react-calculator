import {PureComponent} from 'react';
import styles from './button.module.css';
import * as buttonActions from '../redux/button/actions.js';

export default class Button extends PureComponent {
    render() {
        return(
            <button type="button" onClick="" className={styles.button} value={this.props.text} data-button-type={this.props.type}>
                {this.props.text}
            </button>
        )
    }
}
/*
const mapStateToProps = state => {
    screenCharacters: state.screenCharacters
}

const mapDispatchToProps = state => {
    return {

    }
}*/