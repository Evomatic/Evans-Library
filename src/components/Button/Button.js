import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button {...props}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.label}
        </button>    
    );
}


Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
}


export default Button;

