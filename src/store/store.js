import {
  configureStore,
  // combineReducers
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import storReducer from "./storSlice";
import authReducer from "./authSlice";
import { storeThunk } from "./storeOperations";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// const rootReducer = combineReducers({
//   auth: authReducer,
//   store: storReducer,
// });

// const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    store: storReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: storeThunk,
      },
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "store/getPostsByUserId/fulfilled",
          "store/getAllPosts/fulfilled",
        ],
        ignoredPaths: ["store.posts"],
      },
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
