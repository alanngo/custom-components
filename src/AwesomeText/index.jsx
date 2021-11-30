
import React from 'react';
import {getTextType} from "./helper"
export const AwesomeText = (
    { 
        as = "p", 
        children=<></>,
        
        // color
        textColor="black",
        
        // font family
        font="",
        
        // font properties
        underline=false,
        overline=false,
        strikethrough=false,
        bold=false,
        italic=false,

        // extra styling
        style= {}
    }) => (getTextType(as, children, 
    {
        "color": textColor,
        "font-family": font,
        "text-decoration": `${underline?"underline":""} ${overline?"overline":""} ${strikethrough?"line-through":""}`,
        "font-style": `${italic?"italic":""}`,
        "font-weight": `${bold?"bold":""}`,
        ...style
    }))

export default AwesomeText
