import { SET_ALL_FOOD_ITEMS_DATA } from "../Action/FoodsDataAction";

const foodsData = [];

export const foodDataReducer = (state = foodsData, action) => {
    switch (action.type) {
        case SET_ALL_FOOD_ITEMS_DATA:
            return action.payload.filter((food) => food.category === "lunch");

        default:
            return state;
    }
};
