import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


 function ButtonM(props) {
  

  return (
    <div className="containerButton">
      <Button {...props}>
                  
        {props.children}
      </Button>
      
    </div>
  );
}

ButtonM.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}


export default ButtonM;