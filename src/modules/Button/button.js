import React from 'react';

export const Button = (props) => {
    return(
        <button type="button" value={props.text} data-button-type={props.type}>
            {props.text}
        </button>
    )
}