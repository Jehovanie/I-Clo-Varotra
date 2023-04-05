import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth"
import market from "./market";

export default combineReducers({ auth, market })