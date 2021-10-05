import React from 'react';
import { createComponent } from '@lit-labs/react';
import ProductCard from '../ProductCard/ProductCard.js';



const ProductCardM = createComponent(
        /** react instance */
        React,

    /** tag name */
        'product-card',

    /** web component class */
        ProductCard,

        /** events */
        {
            onclick: 'click'
        }
    )

export default ProductCardM;