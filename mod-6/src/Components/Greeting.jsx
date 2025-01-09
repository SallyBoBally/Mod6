import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, children }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <div>{children}</div>
        </div>
    );
};

Greeting.defaultProps = {
    name: 'Guest',
};

Greeting.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
};

export default Greeting;