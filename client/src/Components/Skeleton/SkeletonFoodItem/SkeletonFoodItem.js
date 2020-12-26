import React from 'react';
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';

const SkeletonFoodItem = ({ theme }) => {
   
    return (
        <div className='skeleton-wrapper '>
            <div className='FoodItem'>
                <div className="FoodItemInfo left_side" style={{flexBasis:'50%'}}>
                    <Skeleton type='title' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                    <div className="price_quantity">
                        <Skeleton type='skeletonBtn' />
                        <Skeleton type='skeletonBtn' />
                    </div>
                    <Skeleton type='skeletonBtn' />
                    
                </div>
                <div className="right_side bigImg">
                    <Skeleton type='round-big-img' />
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonFoodItem;