import React from 'react';
import PropTypes from 'prop-types';
import ProductCardW from '../ProductCardW/ProductCardW.js';

function ProductCardM(props) {
    return (
        <ProductCardW {...props}>
            {props.children}
        </ProductCardW>    
    );
}

ProductCardM.propTypes = {
    img: PropTypes.node,
    main: PropTypes.string,
    subone: PropTypes.string,
    buttoncolor: PropTypes.string,
    buttontextcolor: PropTypes.string,
    onclick: PropTypes.func,
}

export default ProductCardM;


