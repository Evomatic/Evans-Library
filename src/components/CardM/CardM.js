import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function CardM(props) {
  const bull = <span className={props.bullet}>.</span>;

  return (
    <Card className={props.root}>
      <CardContent>
        <Typography className="title" color={props.color1} gutterBottom>
          Word of the Days
        </Typography>
        <Typography variant={props.variant2} component={props.component2}>
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className="type" color={props.colo3}>
          adjective
        </Typography>
        <Typography variant={props.variant3} component={props.component3}>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size={props.btnSize}
        disabled={props.disabled}
        >Learn More</Button>
      </CardActions>
    </Card>
  );
}
  



CardM.propTypes = {
    color1: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
    color2: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
    color3: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
    variant2: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),
    variant3: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),
    component2: PropTypes.elementType,
    component3: PropTypes.elementType,
    gutterBottom: PropTypes.bool,
    btnSize: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool
}

export default CardM;