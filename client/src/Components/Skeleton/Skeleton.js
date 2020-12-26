import React from 'react';
import './Skeleton.css'

const Skeleton = ({ type }) => {
    const skeletonClass = `skeleton ${type}`
    return (
        <div className={skeletonClass}>

        </div>
    );
};

export default Skeleton;