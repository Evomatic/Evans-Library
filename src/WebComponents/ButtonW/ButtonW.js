import React from 'react';
import { createComponent } from '@lit-labs/react';
import Button from '../Button/Button.js';



const ButtonW = createComponent(
        /** react instance */
        React,

    /** tag name */
        'my-button',

    /** web component class */
        Button,

        /** events */
        {
            onclick: 'click'
        }
    )

export default ButtonW;



