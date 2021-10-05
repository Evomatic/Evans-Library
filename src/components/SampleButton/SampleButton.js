import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonN from '@material-ui/core/Button';
import PropTypes from "prop-types";
import ButtonGroup  from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 function SampleButton(props) {
  
 return(<ButtonN {...props}>{props.children}</ButtonN>);
    
      
     
  
}

SampleButton.propTypes={
    children: PropTypes.node,
    variant: PropTypes.oneOf(["contained","outlined","text"])
}

export {SampleButton as default}