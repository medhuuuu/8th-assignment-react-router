import React from 'react';

const NoMatch = () => {
    const noMatchStyle = {
        textAlign: 'center',
        color: 'darkgray',
        fontSize: '30px',
        marginTop: '200px'
    }
    return (
        <div style={noMatchStyle}>
            <h1 style={{color: 'red'}}>404</h1>
            <p><small>Error</small></p>
            <p>Not found</p>
        </div>
    );
};

export default NoMatch;