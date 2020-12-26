import React from 'react';
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';

const SkeletonUser = ({ theme }) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-user">
                <div className="img">
                    <Skeleton type='round-img' />
                </div>
                <div className='info'>
                    <Skeleton type='title' />
                    <Skeleton type='text' />
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonUser;