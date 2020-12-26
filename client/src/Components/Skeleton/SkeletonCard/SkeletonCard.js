import React from 'react';
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';

const SkeletonCard = () => {
    return (
       
        <div className='skeleton-wrapper'>
            <div className='foodItem ' >
                <div className="foodItemInfo">
                    <Skeleton type='round-img' />
                    <Skeleton type='title' />
                    <Skeleton type='text' />
                    <Skeleton type='skeletonBtn' />
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonCard;