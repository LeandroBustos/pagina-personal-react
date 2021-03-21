import React from 'react';

const CustomHref = ({component:Component, ...ownProps}) => {
    return ( 
        <a {...ownProps}>
            {<Component/>}
        </a>
    );
}
export default CustomHref;