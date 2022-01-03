import React from 'react';

export const Screen = (props) => {
    return(
        <section id="screen">
            {props.input}
        </section>
    )
}

Screen.show = (msg) => {
    if(this.input.toString() !== '')
        Screen.props.input += msg.toString();
    else 
        Screen.props.input = Screen.props.input;
}