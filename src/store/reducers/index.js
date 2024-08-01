import { combineReducers } from "@reduxjs/toolkit";
import User from "./User"; // Import your user reducer

const RootReducers = combineReducers({
    User, // Add other reducers if needed
});

export default RootReducers;
