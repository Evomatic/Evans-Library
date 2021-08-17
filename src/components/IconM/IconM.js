import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@material-ui/core/Icon';




function Icon (props) {
    return (
        <IconM {...props}>
            {props.children}
        </IconM>
    );
}

Icon.propTypes = {
    children: PropTypes.node,
    /**
     * @uxpinignoreprop
     */
    classes: PropTypes.object,
    /**
     * @uxpinignoreprop
     */
    className: PropTypes.string,
    color: PropTypes.oneOf([
    'primary',
    'secondary',
    'action',
    'error',
    'disabled']),
    component: PropTypes.elementType,
    fontSize: PropTypes.oneOf([
     'inherit',
     'large',
     'medium',
     'small'   
    ])
}


export default Icon;