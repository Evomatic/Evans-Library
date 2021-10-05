import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";


function ButtonGroups(props) {
  return (    
      <ButtonGroup {...props}>
        {props.children}
      </ButtonGroup>
     
   
  );
}

ButtonGroups.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(["default","inherit","primary","secondary"]),
};


export {ButtonGroups as default}