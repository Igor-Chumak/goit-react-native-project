const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const rejected = (state, action) => {
  // console.log("Handler rejected :>> ", action);
  state.isLoading = false;
  // state.error = action.payload;
  switch (action.type) {
    case "auth/register/rejected":
      console.log("auth/register :>> ", action.payload);
      state.error = action.payload;
      break;
    case "auth/login/rejected":
      console.log("auth/login :>> ", action.payload);
      state.error = action.payload;
      break;
    case "auth/logout/rejected":
      console.log("auth/logout :>> ", action.payload);
      state.error = action.payload;
      break;
    case "auth/updateAvatar/rejected":
      console.log("auth/updateAvatar :>> ", action.payload);
      state.error = action.payload;
      break;
    case "store/getPostsByUserId/rejected":
      console.log("store/getPostsByUserId :>> ", action.payload.status);
      state.error = action.payload;
      break;
    //
    default:
      console.log("default action.type :>> ", action.type);
    // state.error = action.payload;
  }
};

const fulfilled = (state) => {
  state.isLoading = false;
};

export const commonHandle = { pending, rejected, fulfilled };
