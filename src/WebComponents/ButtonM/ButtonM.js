import React from 'react';
import PropTypes from 'prop-types';
import ButtonW from '../ButtonW/ButtonW.js';

function ButtonM(props) {
    return (
        <ButtonW {...props}>
            {props.children}
        </ButtonW>    
    );
}

ButtonM.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning']),
    mode: PropTypes.oneOf(['filled', 'ghost', 'minimal', 'flat']),
    children: PropTypes.string,
}

export default ButtonM;