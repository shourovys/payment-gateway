import React from 'react';
import { useHistory } from 'react-router-dom';

const SquareBtn = ({ children, isActive, path }) => {
    const square = {
        backgroundColor: !isActive && 'lightgray',
        borderRadius: 5,
        paddingLeft: '2rem',
        paddingRight: '2rem',
        fontSize: '1.3rem',
        display: 'block',
        margin: '1rem auto'
    }
    const history = useHistory()
    let { from } = { from: { pathname: path } } || { from: { pathname: "/" } };
    return (
        <button
            onClick={() => isActive && history.replace(from)}
            className='btn'
            style={square}
        >
            {children}
        </button>
    );
};

export default SquareBtn;