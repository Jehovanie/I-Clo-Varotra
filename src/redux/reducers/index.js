import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth"
import globalActions from "./globalActions";

export default combineReducers({ auth, globalActions })