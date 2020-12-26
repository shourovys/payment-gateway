import React from 'react';
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';

const SkeletonArticle = ({ theme }) => {
   
    return (
        <div className='skeleton-wrapper light'>
            <div className="skeleton-article">
                <Skeleton type='title' />
                <Skeleton type='text' />
                <Skeleton type='text' />
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonArticle;
