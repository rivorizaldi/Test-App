import { combineReducers } from "redux";
import authReducer from "../features/Auth/redux/AuthSlice";
import branchReducer from "../features/Branch/redux/BranchSlice";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  auth: authReducer,
  branch: branchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/resetState") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
