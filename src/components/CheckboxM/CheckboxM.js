import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';


function CheckboxM(props) {
    return (
        <Checkbox {...props}>
            {props.children}
        </Checkbox>
    );
}


CheckboxM.propTypes = {
    /**
     * @uxpinbind onChange 0.target.checked
     */
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    inputProps: PropTypes.object,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    color: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium']),
    checkedIcon: PropTypes.node,
    icon:PropTypes.node,
    id: PropTypes.string
}

export default CheckboxM;